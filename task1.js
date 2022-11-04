// var a = 60;
// var b = 70;
//  if(a>50 && b>50){
//     console.log(a+b);
//  }
//  else {
//     console.log("ededler yanlishdi");
//  }

        var sum=0;
        var count=0;
        var product=[
            {
                id : 1,
                Name: "ayaqqabi",
                Price:300

            },
            {
                id : 2,
                Name: "canta",
                Price:50

            },
            {
                id : 3,
                Name: "koynek",
                Price:70

            },
            {
                id : 4,
                Name: "sliyapa",
                Price:30

            },
            {
                id : 5,
                Name: "salvar",
                Price:90

            }
        ];
        for (let i = 0; i < product.length; i++) {
            if (product[i].id % 2==1){
                count++;
                sum+=product[i].Price
                
            }   
        }
        console.log("qiymetlerin ortalamasi  " + sum/count + "  berabardir");
