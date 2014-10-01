function searchFunction(eventObject){
      var matchKey = eventObject.target.value;
      var pattern = matchKey.toLowerCase();
      var matchArray = [];
        for(var i = 0;i<GLOBAL.cities.length;i++){
          var city = GLOBAL.cities[i].city.toLowerCase();
          var code = GLOBAL.cities[i].code.toLowerCase();
          if(city.match(pattern) || code.match(pattern)){
              matchArray.push(i);
          }
        }
        console.log(matchArray);
        var table = "<table><thead><tr><th>India</th></tr></thead><tbody>";
        if(matchArray.length != 0){
           for(var j = 0;j < matchArray.length;j++){
          var airport = GLOBAL.cities[matchArray[j]];
          if(j == 0){
              table += "<tr>";
              if(matchArray.length == 1){
                table += "<td><span class='ui-button ui-button-text-only ui-button-text'>" + airport.city + " (" + airport.code +")" + "</span></td>"
              }
            }
            else if(j % 4 != 0){
              table += "<td><span class='ui-button ui-button-text-only ui-button-text'>" + airport.city + " (" + airport.code +")" + "</span></td>"
            }
            else{
              table += "</tr>";
              table += "<tr>";
              table += "<td><span class='ui-button ui-button-text-only ui-button-text'>" + airport.city + "(" + airport.code + ")" +"</span></td>";
            }
          }
        }else{
          table += "<tr><td>No matches found</td></tr>"
        }
       


        table += "</tbody></table>";
        refreshDialog(table);
    }

    function refreshDialog(table){
      $("#city_container").html("")
      if($("#city_container").dialog("isOpen")){
        $("#city_container").html(table);
      }else{
        $("#city_container").html(table);
        $("#city_container").dialog("open");
      }
    }
