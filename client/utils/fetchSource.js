import {onDataReceived,praseJson} from './common.js'
export const fetchSource = (url, options)=>{
  const { onOpen, onMessage, onEnd, onError, ...fetchOptions } = options;
  if (onOpen) {
    onOpen();
  }
  fetch(url, { ...fetchOptions })
    .then((response) => {
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      return reader.read().then(function processText({ done, value }) {
        if (done) {
          if (onEnd) {
            onEnd();
          }
          return;
        }
        const chunk = decoder.decode(value, { stream: true });
		
		// const data = onDataReceived(chunk)
		const data = praseJson(chunk)
		console.log('data',data);
        if (onMessage) {
          onMessage(data);
        }
        return reader.read().then(processText);
      });
    })
    .catch((error) => {
      if (onError) {
        onError(error);
      }
    });
}
