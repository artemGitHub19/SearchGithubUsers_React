export const formatNumber = function formatNumber(num) {
   if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'g';
   }
   if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'm';
   }
   if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
   }
   return num;
};

export const isEnterKeyPressed = function isEnterKeyPressed(event) {

   let result = false;

   let code = (event.keyCode ? event.keyCode : event.which);

   if( code === 13 ) {
      result = true;
   }

   return result;
};