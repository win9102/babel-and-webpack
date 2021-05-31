class MyPlugin{
    apply(compiler){
        compiler.hooks.done.tap('My Plugin', stats =>{
            console.log('MyPluging: done');
        })
    }
} 

module.exports = MyPlugin;