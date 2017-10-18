function napkomment() {
    var napnev = document.getElementById("het").value;
    var komment;
    switch (napnev) {
        case 'Hetfo':
            komment = 'Jaj, rohadt ' + napnev;
            break;
        case 'Kedd':
            komment = 'Huh, meg csak ' + napnev;
            break;
        case 'Szerda':
            komment = 'Még csak a hét közepén vagyunk ' + napnev;
            break;
        case 'Csutortok':
            komment = 'Túlléptünk a közepén ' + napnev;
            break;
        case 'Pentek':
            komment = 'Végre ' + napnev;
            break;
        case 'Szombat':
            komment = 'Buliiii ' + napnev;
            break;
        case 'Vasarnap':
            komment = 'Jozanodas ' + napnev;
            break;
        default:
            komment = 'Nem ismerek ilyen napot. Írd le helyesen!';
    };
    document.getElementById("beszolas").innerHTML = komment;

};