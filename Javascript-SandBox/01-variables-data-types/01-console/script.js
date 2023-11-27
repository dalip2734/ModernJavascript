// using console
console.log(100);
console.group('simple');
console.log("Dalip");
console.error('Alert');
console.warn('warning');
console.table({name:'Dalip', email:'dalipyadavcse@gmail.com'});
console.groupEnd();


const styles = 'padding:10x ; background-color:white;color:green';
console.log('%cHello world', styles);