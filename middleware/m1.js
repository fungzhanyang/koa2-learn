function pv(ctx) {
    console.log('m1');
}

module.exports = function() {
    return async function(ctx, next) {
        console.log('m1 start');
        
        pv(ctx);
        await next();
        console.log('m1 end');
    };
};
