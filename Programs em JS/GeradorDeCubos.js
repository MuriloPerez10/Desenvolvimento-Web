<script>
        var button = document.getElementById("elemento");

        function criaçao(){
            var diva = document.createElement('div');
            diva.style.width = '100px';
            diva.style.height = '100px';
            diva.style.backgroundColor = '#fff';

        var caixa = document.getElementById("app");
        caixa.appendChild(diva);
        
            console.log('banana');
        }
    </script>