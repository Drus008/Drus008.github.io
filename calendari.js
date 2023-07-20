const diesSetmana = ["Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte", "Diumenge"]


// crea un calendari
function crearCalendario() {
    var dia =  new Date()

    // crea la taula i afegeix les seves etiquetes
    pag = document.getElementById("pag0");
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    tbl.classList.add("taulaMes");

    pag.appendChild(tbl);

    // bucle per a crear cada fila
    for (let f = 0; f < 7; f++) {
        const row = document.createElement("tr");
        row.classList.add("filaCalendari");
      
        // crea la primera fila (el títol)
        if (f==0){
            const cell = document.createElement("td");
            cell.colSpan = "7"
            cell.classList.add("titol");
            var cellText = document.createTextNode(`Títol`);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        // bucle per a crear cada columna
        else for (let c = 0; c < 7; c++) {
            const cell = document.createElement("td");

            // Si som a la primera fila posem els noms dels dies
            if (f==1){
                cell.classList.add("diaSetmana");
                var cellText = document.createTextNode(diesSetmana[c]);
                cell.appendChild(cellText);
            }

            // Creem les caselles dels dies del calendari
            else {                
                cell.classList.add("casellaDia");

                // Creem les taules de cada dia
                const tblDia = document.createElement("table");
                const tblBodyDia = document.createElement("tbody");
                tblDia.classList.add("taulaDiaMes");


                // Creem les files de cada dia
                for ( let fD = 0; fD<3; fD++) {
                    const rowD = document.createElement("tr");
                    rowD.classList.add("taulaFilDiaMes");

                    // Fiquem el número del dia a la casella
                    if (fD==0){
                        const cellD = document.createElement("td");
                        cellD.colSpan = "3";
                        cellD.classList.add("casellaNumDia");
                        var numDia = new Date();
                        numDia.setDate(dia.getDate()-((dia.getDay()+6)%7-c)+7*(f-3));
                        console.log(numDia)
                        var cellText = document.createTextNode(numDia.getDate());
                        cellD.appendChild(cellText);
                        rowD.appendChild(cellD);
                    }

                    // Fiquem els símbols si hi ha un event important
                    else for (let cD=0; cD<3; cD++){
                        if (fD!=2 || cD!=1) {
                            const cellD = document.createElement("td");

                            if (cD==0 || cD==2){
                                cellD.classList.add("casellaIconoDia");
                                    const amarillo = document.createElement("div");
                                    amarillo.classList.add("circulo");
                                    cellD.appendChild(amarillo);
                            }
                            else{
                                cellD.classList.add("casellaImportantDia");
                                cellD.rowSpan = "2";
                                const rojo = document.createElement("div");
                                rojo.classList.add("circuloRojo");
                                cellD.appendChild(rojo);
                            }
                            rowD.appendChild(cellD);
                        }
                    }
                    tblBodyDia.appendChild(rowD);
                }
                tblDia.appendChild(tblBodyDia);
                cell.appendChild(tblDia)
                
            }
            // resaltem la setmana actual
            if (f==3) cell.classList.add("setmanaActual");

            // resaltem el dia de la setmana actual
            if (c==(dia.getDay()+6)%7) cell.classList.add("diaDeSetmanaActual")

            // fiquem les caselles dins les files
            row.appendChild(cell);
        }
      tblBody.appendChild(row);
    }
      

    tbl.appendChild(tblBody);
    document.body.appendChild(tbl);
}


window.addEventListener("load", (e) => crearCalendario());