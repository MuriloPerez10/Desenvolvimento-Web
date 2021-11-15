<script>
        var nomes = ["Diego", "Gabriel", "Lucas"];
        var lista1 = document.createElement('li');
        var lista2 = document.createElement('li');
        var lista3 = document.createElement('li');
        var txt = document.createTextNode(nomes[0]);
        var txt2 = document.createTextNode(nomes[1]);
        var txt3 = document.createTextNode(nomes[2]);
        var diva = document.querySelector('#app');

        lista1.appendChild(txt);
        lista2.appendChild(txt2);
        lista3.appendChild(txt3);
        diva.appendChild(lista1);
        diva.appendChild(lista2);
        diva.appendChild(lista3);

        function adicionar(){
            var n = document.querySelector('#nome').value;
            var listas = document.createElement('li');
            var divi = document.getElementById('divi');
            var na = document.createTextNode(n);

            listas.appendChild(na);
            divi.appendChild(listas);
            console.log(n)
        }
    </script>