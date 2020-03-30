function pv(ctx) {
    ctx.session.count++
    console.log('pv----',ctx.path);
}

module.exports = function() {
    return async function(ctx, next) {
        console.log('pv start');
        
        pv(ctx);
        await next();
        console.log('pv end');
    };
};
