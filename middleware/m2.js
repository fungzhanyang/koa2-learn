function pv(ctx) {
    console.log('m2');
}

module.exports = function() {
    return async function(ctx, next) {
        console.log('m2 start');
        
        pv(ctx);
        await next();
        console.log('m2 end');
    };
};
