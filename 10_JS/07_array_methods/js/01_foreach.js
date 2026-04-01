      // 배열메소드: forEach()
      // 기능: 자바의 stream 과 비슷, 함수실행하면 자동으로 반복문이 실행됨
      //      배열의 끝까지 자동 실행

      // 예제) 목적: for문 안쓰고 간단하게 코딩하기 위해 사용
      let a = [1, 2, 3];
      // a.length : 배열 안에 값의 개수를 자동으로 가져옴
      for (let i = 0; i < a.length; i++) {
        console.log(a[i]); // 값
      }
      // 배열 메소드로 변경:
      a.forEach((v) => console.log(v));


      