function getValue(){
    var a = document.getElementById("value").value;
    var output = document.getElementById("output");
    var out = "";
    if(a.length != 3) out = "Invalid Codon";
    if(a.charAt(0) != "A" && a.charAt(0) != "U" && a.charAt(0) != "C" && a.charAt(0) != "G") out = "Invalid Codon";
    else if(a.charAt(1) != "A" && a.charAt(1) != "U" && a.charAt(1) != "C" && a.charAt(1) != "G") out = "Invalid Codon";
    else if(a.charAt(2) != "A" && a.charAt(2) != "U" && a.charAt(2) != "C" && a.charAt(2) != "G") out = "Invalid Codon";

    else if(a.charAt(0) == 'U'){
        if(a.charAt(1) == 'U'){
            if(a.charAt(2) == "U" || a.charAt(2) == "C") out = "Phenylalanine";
            else out = "Leucine";
        }
        else if(a.charAt(1) == 'C') out = "Serine";
        else if(a.charAt(1) == "A"){
            if(a.charAt(2) == "U" || a.charAt(2) == "C") out = "Tyrosine";
            else out = "Stop Codon"
        }
        else{
            if(a.charAt(2) == 'U' || a.charAt('2') == 'C') out = "Cysteine";
            else if(a.charAt(2) == 'A') out = "Stop Codon"
            else out = "Tryptophan";
        }
    }
    else if(a.charAt(0) == 'C'){
        if(a.charAt(1) == 'U') out = "Leucine";
        else if(a.charAt(1) == "C") out = "Proline";
        else if(a.charAt(1) == "A"){
            if(a.charAt(2) == "U" || a.charAt(2) == "C") out = "Histidine";
            else out = "Glutamine";
        }
        else out = "Arginine";
    }
    else if(a.charAt(0) == "A"){
        if(a.charAt(1) == "U"){
            if(a.charAt(2) != "G") out = "Isoleucine";
            else out = "Metionine, Start Codon";
        }
        else if(a.charAt(1) == 'C') out = "Threonine";
        else if(a.charAt(1) == "A"){
            if(a.charAt(2) == "U" || a.charAt(2) == "C") out = "Asparagine";
            else out = "Lysine";
        }
        else{
            if(a.charAt(2) == "U" || a.charAt(2) == "G") out == "Serine";
            else out = "Arginine"; 
        }
    }
    else if(a.charAt(0) == "G"){
        if(a.charAt(1) == "U") out = "Valine";
        else if(a.charAt(1) == "C") out = "Alanine";
        else if(a.charAt(1) == "A"){
            if(a.charAt(2) == "U" || a.charAt(2) == "C") out = "Aspartic Acid";
            else out = "Glutamic Acid";
        }
        else out = "Glycine";
    }
    else out = "Invalid Codon";
    output.innerHTML = out;
}