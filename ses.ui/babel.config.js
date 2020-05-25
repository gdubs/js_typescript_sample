module.exports = {
  presets: [
    [
     
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      }
    ],
    '@babel/preset-typescript',
    "@babel/preset-react",
  ],
};



// api => {
//   const isTest = api.env('test');
//   api.cache(true);

//   const preset =  {
//     "presets": [
//       "@babel/preset-react",
//       "@babel/preset-typescript",
//       [
//         "@babel/preset-env",
//         {
//           "targets": {
//             "browsers": ['last 2 versions'],
//           },
//           "modules": isTest ? 'commonjs' : false,
//         }
//       ],
      
      
//     ]
//   }

//   return preset;
// } 
