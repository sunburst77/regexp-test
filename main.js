// let str = `
// 010-1234-5678
// thesecon@gmail.com
// https://www.omdbapi.com/?apikey=7035c60c&s=top gun
// The quick brown fox jumps over the lazy dog.
// abbcccdddd
// http://localhost:1234
// 동해물과_백두산이 마르고 닳도록
// `

// const regexp = new RegExp('the','gi')  // g옵션=g플래그 : the가 들어있는 모든 데이터 추출, i : 대소문자 구분하지 않고 검색하겠다
// console.log(str.match(regexp))

// const regexp = /the/gi
// console.log(str.match(regexp))
// console.log(regexp.test(str))
// str = str.replace(regexp,'AAA')
// console.log(str)
// console.log(str.match(/\.$/gim))  //.만 입력하면 정규표현식의 기능으로 인식하므로 문자로 인식시키려면 앞에 \ 를 붙여야 한다
// $ : 문자데이터의 끝부분(`앞부분)에 마침표가 있는지 찾음-null반환
// m : 각각의 줄에서 마침표로 끝나는 부분이 있는지 체크

const h = `  the hello world        !

`
console.log(
    // str.match(/^T/gm)
    // str.match(/h..p/g) //h로 시작하고 p로 끝나는 어떠한 문자열을 찾는다
    // str.match(/fox|dog/g)  //g가 없으면 먼저 찾아지는 것만 반환함
    // str.match(/https?/g)  //s가 있을수도 없을수도 있는 내용을 찾는다
    // str.match(/d{2,3}/g)
    // str.match(/\b\w{2,3}\b/g)  //숫자를 포함한 영어 알파벳이 두번이상 3번이하 반복되는것을 찾음
    //숫자나 알파벳이 아닌것들을 경계로 만들어줌 => 이후에 뒤에 있는 조건을 찾는다

    // str.match(/[가-힣]{1,}/g)

    // str.match(/\bf\w{1,}\b/g)  //소문자f로 시작하는 모든 영단어를 검색
    // str.match(/\d{1,}/g)
    
    // str.match(/\s/g)
    // h.match(/\s/g)
    // h.replace(/\s/g,'')

    )


const str = `
010-1234-5678
thesecon@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=top gun
The quick brown fox jumps over the lazy dog.
abbcccddd
`

console.log(
    // str.match(/.{1,}(?=@)/g)  //@를 기준으로 앞쪽에 일치하는 한개이상의 문자를 출력
    str.match(/(?<=@).{1,}/g)
)