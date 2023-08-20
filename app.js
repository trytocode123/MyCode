//DOM HTML: 
//getElementById
//getElementsByClassName: trả về HTML collection (giống như một cái mảng)
//getElementsByTagName: trả về HTML collection (giống như một cái mảng)
//querySelector: sellection CSS 
//HTML collection
 //querySelectorAll: sellection CSS  (trả về NodeList)
 //innerText
 //textContent
 //innerHTML
 //outerHTML: it dung



 
//  DOM attribute
// var cc = document.getElementById('heading')
// cc.href = 'Heading'
// cc.setAttribute('title', '  ')
// cc.getAttribute

 // DOM CSS:
   // var cc = document.getElementById('heading')
   // Object.assign(cc.style, {
   //   color: 'red'
   // })
  //  cc.style='red'

// DOM events :
//1.input/select
// 2.keyup/keydown
//preventDefault
// stopPropagation
// addEventListener('click', 'viec1')
// removeEventListener('click', 'viec1')
// var btn = document.querySelector('button')
// function viec1() {
//   console.log('viec1')
// }
// btn.addEventListener('click', viec1)

// setTimeout(function() {
//   btn.removeEventListener('click', viec1)
// }, 3000);


// ClassList Property:
// add
// contain
//remove
//toggle
//cc.classList.add = 'title'

// var cc = document.querySelector('.heading')
// cc.classList.add('red')
//  var arr = [
//    'asdas',
//    'asdasd',
//    1,
//  ];

//  arr.map(function(arrs, index) {
//   console.log(index, arrs)
//  });

//Promise
// Trang thai:
// Pendding: ko có điểm dừng( tràn bộ nhớ)
// fulfilled; thanh cong
//reject: thất bại
// var promise = new Promise((resolve, reject) => {
    //  Excutor
    
    // logic
    // thanh cong: resolve
    // that bai: reject
//    resolve([
//       {
//         name: 'ccc',
//         age: 14,
//       }
//    ]);
// });

// promise
//      .then((info) => {
//         console.log(info)
//      })
//      .catch(() => {
//       console.log('Failure!')
//      })
//      .finally(() => {
//       console.log('Done!')
//      })
// NOTE: lỗi (in promise) la chua bao lỗi (catch).

// cach khai bao moi:
// var promise = Promise.resolve('Successfull')

// var promise = Promise.reject('Successfull')

// promise 

// .then(function(result) {
//  console.log('result:', result)
// })

// .catch(function(err) {
//  console.log('error:', err)

// var users = [
//  {
//    id: 1,
//    name: 'Kien Dam',
//  },
//  {
//    id: 2,
//    name: 'Son Dang',
//  },
//  {
//    id: 3,
//    name: 'Hung Dam',
//  },
// ];

// var comments = [
//      {
//       id: 1,
//       user_id:1,
//       content: 'sdaasdasd',
//      },
//      {
//       id: 2,
//       user_id:2,
//       content: 'sdaasdasd',
//      },
//      {
//       id: 3,
//       user_id:3,
//       content: 'sdaasdasd',
//      },
// ];

//1. Lấy comments
// 2. Từ comments lấy ra user_id
// từ user_id lấy ra user tướng ứng

// Fake id

// function getUsersByID(userIDs) {
//       return new Promise((resolve, reject) => {
//          setTimeout(function() {
//             var result = users.filter(function(user) {
//                  return userIDs.includes(user.id)
//             })
//             resolve(result)  
           
//          }, 1000)
//       })
// }

// function getComments() {
//    return new Promise(function(resolve) {
//       setTimeout(function() {
//          resolve(comments)
//       }, 1000)
//    })
// }

// getComments() 
// .then(function(comments){
//    var userIDs = comments.map(function(comment) {
//       return comment.user_id 
//    })
//            return getUsersByID(userIDs)
//            .then(function(users) {
//             return {
//                users: users,
//                comments: comments,
//             };
//          });
// })
// .then(function(data) {
//    var commentBlock = document.getElementById('comment-block')
//    var html = ' ';
//    data.comments.forEach(function(comment) {
//       var user = data.users.find(function(user) {
//          return user.id === comment.user_id;
//       });
//       html +=  `<li>${user.name}: ${comment.content}</li>`
//    });
//      commentBlock.innerHTML = html;
// }) 

// var courseApi = 'http://localhost:3000/coures'
// fetch(courseApi)
// .then(function(response){
//    return response.json()
// })

// var fieldName = 'name';
// var fieldAge = 'age';

// var users = {
//   [fieldName]: 'Son Dang',
//   [fieldAge]: 10000,
//   getName() {
//     return this[fieldName];
//   }
// }

// console.log(users);

// Destructuring, Rest
// var arr = [
//   1, 2, 3, 4, 5, 6
// ];

// var [a, b, c] = arr;

// console.log(a, b, c);

// var arr = [
//   1, 2, 3, 4, 5, 6
// ];

// var [a, ...rest] = arr;

// console.log(a);

// console.log(rest);

// var object = {
//      name: 'Son Dang',
//      age: 10000,
//      children: [
//       1, 2, 3
//      ]
// };

// var {name: parentName, children: [a]} = object;
// console.log(a);
// console.log(parentName);

// function hightlight ([first, ...strings], ...value) {
//   return value.reduce((acc, curr) =>[...acc, `<span>${curr}</span>`, strings.shift()],
//   [first]).join('');
// }

// var brand = 'F8';
// var coure = 'Javascript';

// const html = hightlight `Hoc lap trinh ${coure} tai ${brand}`;
// console.log(html)

// document.querySelector('#comment-block')
// .innerHTML = html;

// import {logger2} from './logger/index.js';
// import * as constants from './constant.js';
// logger2('comment-block', constants.TYPE_WARN)

// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// const tabs = $$(".tab-item");
// const panes = $$(".tab-pane");

// const tabActive = $(".tab-item.active");
// const line = $(".tabs .line");

// // SonDN fixed - Active size wrong size on first load.
// // Original post: https://www.facebook.com/groups/649972919142215/?multi_permalinks=1175881616551340
// requestIdleCallback(function () {
//   line.style.left = tabActive.offsetLeft + "px";
//   line.style.width = tabActive.offsetWidth + "px";
// });

// tabs.forEach((tab, index) => {
//   const pane = panes[index];

//   tab.onclick = function () {
//     $(".tab-item.active").classList.remove("active");
//     $(".tab-pane.active").classList.remove("active");

//     line.style.left = this.offsetLeft + "px";
//     line.style.width = this.offsetWidth + "px";

//     this.classList.add("active");
//     pane.classList.add("active");
//   };
// });

// window.scrollY || document.documentElement.scrollTop: lấy chiều ngang ban đầu


    // Xử lý bật / tắt random song
    // Handling on / off random song

//    Đối tượng Validator
//     function Validator(options) {

//       function getParent(element, selector) {
//         while (element.parentElement) {
//           if(element.parentElement.matches(selector)) {
//             return element.parentElement;
//           }
//           element = element.parentElement;
//         }
//       }
//       var selectorRules = {};
//       // Hàm thực hiện validate
//       function Validate(inputElement, rule) {
//         var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
//         var errorMessage;
//         // Lay  ra cac rules cua selector
//         var rules = selectorRules[rule.selector];
//         console.log(rule.selector);
//       //  Lap qua tung rules va kiem tra
//       // Neu co loi thi dung viec kiem tra
//         for(var i = 0; i < rules.length; i++) {
//         switch (inputElement.type) {
//           case 'radio':
//           case 'checkbox':
//             errorMessage = rules[i](formElement.querySelector(rule.selector + ':checked'));
//             break;
//           default: 
//           errorMessage = rules[i](inputElement.value);
//         }
         
//           if(errorMessage) break;
//         }

//         if(errorMessage) {
//           errorElement.innerText = errorMessage;
//           getParent(inputElement, options.formGroupSelector).classList.add('invalid');
//       }
//      else {
//        errorElement.innerText = ' ';
//        getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
//      }
//      return !errorMessage; 
//       }
//       // Lấy element của form cần validate
//       var formElement = document.querySelector(options.form);
//       if(formElement) {
//         formElement.onsubmit = function(e) {
//          e.preventDefault();
//          var isFormValid = true;
      
//          //  Lap qua tung rules va validate
//          options.rules.forEach(function(rule) {
//           var inputElement = formElement.querySelector(rule.selector);
//           var isValid = Validate(inputElement, rule)
//           if(!isValid) {
//             isFormValid = false;
//         }
//       });
//         if(isFormValid) {
//           if(typeof options.onSubmit=== 'function') {
//             var enableInput = formElement.querySelectorAll( ' [name] ' )
//             var formValues = Array.from(enableInput).reduce(function(values, input){
//               switch(input.type) {
//                 case 'radio': values[input.name] = formElement.querySelector('input[name="' + input.name + '"]').value; 
//                 case 'checkbox': 
//                 if(!input.matches(':checked')) {
//                   values[input.name] = 
//                    ' ';
//                   return values;
//                 }
//                 if(!Array.isArray(values[input.name])) {
//                   values[input.name] = [ ] ;
//                 }
//                 values[input.name].push(input.value);
//                 break;
//                 case 'file': 
//                 values[input.name] = input.files;
//                   default: (values[input.name] = input.value)
//               }
              
//              return values; 
//             },{ });
//             options.onSubmit(formValues);
//           } 
//         }
//         else {
//           console.log("Co loi");
//         }
//         }
        
//         // Lap qua moi rule va xu ly(lang nghe su kien)
//          options.rules.forEach(function(rule) {
//         // Luu lai cac rules cho moi input
//         if(Array.isArray(selectorRules[rule.selector])) {
//           selectorRules[rule.selector].push(rule.test);
//         }else {
//           selectorRules[rule.selector] = [rule.test];
//         }
//           var inputElements = formElement.querySelectorAll(rule.selector);
//         Array.from(inputElements).forEach(function(inputElement) {
//           inputElement.onblur = function() {
//             Validate(inputElement, rule);
//           }
//           //. Xu li moi khi nguoi dung nhap vao input
//           inputElement.oninput = function() {
//             var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(
//               options.errorSelector);
//             errorElement.innerText = ' ';
//             console.log(inputElement.name);
//        errorElement.parentElement.classList.remove('invalid');
//           }
//         });
//        });
//   }
  
// }

//     Validator.isRequired = function (selector) {
//        return {
//          selector: selector,
//          test: function(value) {
//           return value? undefined : 'Vui long nhap truong nay';
//        }
//     };
//   }

//     Validator.isEmail = function(selector) {
//         return {
//           selector: selector,
//           test: function(value) {
//             var regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
//             return regex.test(value) ? undefined : 'Khong phai la email'
//           }
//         }
//     }

//     Validator.minLength = function(selector, min) {
//       return {selector: selector,
//         test: function(value) {
//           return value.length >= min ? undefined : `Vui long nhap toi thieu ${min} ky tu`;
//         }
//       }
//     }

//     Validator.isConfirmed = function(selector, getConfirmValue) {
//       return {selector: selector,
//         test: function(value) {
//           return value === getConfirmValue() ? undefined : 'Mat khau khong dung'
//         }
//       }
//     }
 
function Validator(formSelector) {
  var _this = this;
  
  function getParent(Element, selector)  {
    while(Element.parentElement) {
        if(Element.parentElement.matches(selector)) {
          return Element.parentElement;
        }
        Element = Element.parentElement;
    }
  }
  var formRules = {};
  // Lay ra form element
  var validatorRules = {
   required: function(value) { return value?undefined : 'Vui long nhap truong nay'},
   email: function(value) { var regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return regex.test(value) ? undefined : 'Khong phai la email'},
   min: function(min) {
    return function(value) {
      return value.length >= min ? undefined : `Vui long nhap it nhat ${min} ky tu`;
    }
   },
  };
  var formElement = document.querySelector(formSelector);

  if(formElement) 
   {
      var inputs = formElement.querySelectorAll(' [name][rules] ');
 
      for(var input of inputs) 
     {
        var rules = input.getAttribute('rules').split(' | ');

        for(var rule of rules) 
       {
         var ruleInfo;
          var isRulesHasValue = rule.includes(':')
            if(isRulesHasValue) {
              ruleInfo = rule.split(':');
              
              rule = ruleInfo[0];
              // console.log(validatorRules[rule](ruleInfo[1]));
            }
            var ruleFunc = validatorRules[rule];
           if(isRulesHasValue) {
            ruleFunc = ruleFunc(ruleInfo[1])
           }
            if(Array.isArray(formRules[input.name]))  {
              formRules[input.name].push(ruleFunc)
          }
          else {
            formRules[input.name] = [ruleFunc];
          }
          }
          // Lang nghe su kien  de validat(blur, change,...)
          input.onblur = handleValidate;
          input.oninput = clearValidate;

      }
     function handleValidate(event) 
     {
     var rules = (formRules[event.target.name]);
     var errorMessage;
     for(rule of rules) {
      errorMessage =  rule(event.target.value);
      if(errorMessage) break;
     }
  
     if(errorMessage) {
      var  formGroup = getParent(event.target, '.form-group');
      if(formGroup) {
        formGroup.classList.add('invalid');
        var formMessage = formGroup.querySelector('.form-message');
          if(formMessage) {
            formMessage.innerText = errorMessage;
          }
      }
      
     }
     return !errorMessage;
     }
     function clearValidate(event) {
      var  formGroup = getParent(event.target, '.form-group');
      if(formGroup.classList.contains('invalid')) {
        formGroup.classList.remove('invalid');
        var formMessage = formGroup.querySelector('.form-message');
          if(formMessage) {
            formMessage.innerText = ' ';
          }
      }
     }
    } 
   formElement.onsubmit = function(event) {
    event.preventDefault();
    var inputs = formElement.querySelectorAll(' [name][rules] ');
    var isValid = true;
      for(var input of inputs) 
     {
       if(!handleValidate({target:input})) {
          isValid = false;

       }
      
     }
    //  Khi khong co loi thi submit form
    if(isValid) {
      if(typeof _this.onSubmit === 'function') {
        var enableInput = formElement.querySelectorAll( ' [name] ' )
            var formValues = Array.from(enableInput).reduce(function(values, input){
              switch(input.type) {
                case 'radio': values[input.name] = formElement.querySelector('input[name="' + input.name + '"]').value; 
                case 'checkbox': 
                if(!input.matches(':checked')) {
                  values[input.name] = 
                   ' ';
                  return values;
                }
                if(!Array.isArray(values[input.name])) {
                  values[input.name] = [ ] ;
                }
                values[input.name].push(input.value);
                break;
                case 'file': 
                values[input.name] = input.files;
                  default: (values[input.name] = input.value)
              }
              
             return values; 
            },{ });
            _this.onSubmit(formValues);
    
      }else{
        formElement.onsubmit = _this.onSubmit();
      }
    }
   };
  }

  


       
 
