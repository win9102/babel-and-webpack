module.exports = {
  presets:[
    //   '@babel/preset-env'

    // 지원할 브라우저 지정
      ['@babel/preset-env',{
          targets:{
              chrome: '79',
              ie: '11'
          },
          useBuiltIns : 'usage',
          corejs :{
              version : 2 //3
          }
      }]
    
]
}