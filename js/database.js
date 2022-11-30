
        const db = getDatabase();

        var namebox = document.getElementById("name");
        var idbox = document.getElementById("id");
        var secbox = document.getElementById("section");

        var insBtn = document.getElementById("btn1");
       


        function InsertData(){
                set(ref(db, "TheStudents/"+ idbox.value),{
                    NameOfStd: namebox.value,
                    RollNo: idbox.value,
                    Section: secbox.value,

                })
                .then(()=>{
                    alert("data stored successfully");
                })
                .catch((error)=>{
                    alert("unsuccessful, error"+error);
                });
        }
        

        insBtn.addEventListener('click', InsertData);