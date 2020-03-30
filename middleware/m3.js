function pv(ctx) {
    console.log('m3');
}

module.exports = function() {
    return async function(ctx, next) {
        console.log('m3 start');
        
        pv(ctx);
        await next();
        console.log('m3 end');
    };
};
