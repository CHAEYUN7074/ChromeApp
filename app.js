// cf)getElementById는 아이디인지 클래스인지 명시해 줄 필요가 없어. 이미 id인걸 알고있으니까
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
//anchor(a)의 시행을 막는 test
// const link = document.querySelector("a");
const greeting= document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";
//일반적으로 string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용한다

function onLoginSubmit(event){
    // console.dir(loginInput); //input의 내부를 콘솔에서 보여준다
    // console.log("click");
    event.preventDefault();
    //console.log(loginInput.value); //콘솔에서 value 값 확인하기
    const username = loginInput.value;
    loginForm.classList.add("hidden");
    // greeting.innerText = "Hello " + username;
    greeting.innerText = `Hello ${username}`; //스페이스까지 고려해서 합쳐준다(물결표시에 있는 벡틱기호임에 주의!)
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


loginForm.addEventListener("submit", onLoginSubmit);
                         //------누군가 submit 하면
                         //          -------js 가 이 함수 호출
//js가 처음 발생한 이벤트에 대한 정보(event object)를 담은 채로 function을 호출



// function onLoginSumit(){
//     alert("clicked!")
// }


//링크 연결 중단 test
// function handleLinkClick(event){
//     event.preventDefault();
//     console.log(event);

// }

// loginForm.addEventListener("submit", onLoginSubmit);
// link.addEventListener("click", handleLinkClikck);
//                                //------------------함수명() : ()은 바로 우리가 실행하는거니까 빼야해

