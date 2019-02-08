$(document).ready(function() {
    // Макс. расход, м3/ч
    $('#slider_max-flow').slider({
        min: 0,
        max: 5,
        values: [0,5],
        range: true,
        stop: function(event, ui) {
            $("input#minFlow").val($("#slider_max-flow").slider("values",0));
            $("input#maxFlow").val($("#slider_max-flow").slider("values",1));
        },
        slide: function(event, ui){
            $("input#minFlow").val($("#slider_max-flow").slider("values",0));
            $("input#maxFlow").val($("#slider_max-flow").slider("values",1));
        }
    });

    // чтобы ползунок переключался, когда вводят значение в инпут
    $("input#minFlow").change(function(){ 
        var value1=$("input#minFlow").val();
        var value2=$("input#maxFlow").val();

        if(parseInt(value1) > parseInt(value2)){
            value1 = value2;
            $("input#minFlow").val(value1);
        }
        $("#slider_max-flow").slider("values",0,value1);	
    });

        
    $("input#maxFlow").change(function(){
        var value1=$("input#minFlow").val();
        var value2=$("input#maxFlow").val();
        
        if (value2 > 5) { value2 = 5; $("input#maxFlow").val(5)};

        if(parseInt(value1) > parseInt(value2)){
            value2 = value1;
            $("input#maxFlow").val(value2);
        }
        $("#slider_max-flow").slider("values",1,value2);
    });
    // Максимальный напор, м
    $('#slider_max-head').slider({
        min: 0,
        max: 10,
        values: [0,10],
        range: true,
        stop: function(event, ui) {
            $("input#minHead").val($("#slider_max-head").slider("values",0));
            $("input#maxHead").val($("#slider_max-head").slider("values",1));
        },
        slide: function(event, ui){
            $("input#minHead").val($("#slider_max-head").slider("values",0));
            $("input#maxHead").val($("#slider_max-head").slider("values",1));
        }
    });

    // чтобы ползунок переключался, когда вводят значение в инпут
    $("input#minHead").change(function(){ 
        var value1=$("input#minHead").val();
        var value2=$("input#maxHead").val();

        if(parseInt(value1) > parseInt(value2)){
            value1 = value2;
            $("input#minHead").val(value1);
        }
        $("#slider_max-head").slider("values",0,value1);	
    });

     
    $("input#maxHead").change(function(){
        var value1=$("input#minHead").val();
        var value2=$("input#maxHead").val();
        
        if (value2 > 10) { value2 = 10; $("input#maxHead").val(10)};

        if(parseInt(value1) > parseInt(value2)){
            value2 = value1;
            $("input#maxHead").val(value2);
        }
        $("#slider_max-head").slider("values",1,value2);
    });
// Номинальный напор, м
    $('#slider_nominal-head').slider({
        min: 0,
        max: 10,
        values: [0,10],
        range: true,
        stop: function(event, ui) {
            $("input#minNomHead").val($("#slider_nominal-head").slider("values",0));
            $("input#maxNomHead").val($("#slider_nominal-head").slider("values",1));
        },
        slide: function(event, ui){
            $("input#minNomHead").val($("#slider_nominal-head").slider("values",0));
            $("input#maxNomHead").val($("#slider_nominal-head").slider("values",1));
        }
    });

    // чтобы ползунок переключался, когда вводят значение в инпут
    $("input#minNomHead").change(function(){ 
        var value1=$("input#minNomHead").val();
        var value2=$("input#maxNomHead").val();

        if(parseInt(value1) > parseInt(value2)){
            value1 = value2;
            $("input#minNomHead").val(value1);
        }
        $("#slider_nominal-head").slider("values",0,value1);	
    });

        
    $("input#maxNomHead").change(function(){
        var value1=$("input#minNomHead").val();
        var value2=$("input#maxNomHead").val();
        
        if (value2 > 10) { value2 = 10; $("input#maxNomHead").val(10)};

        if(parseInt(value1) > parseInt(value2)){
            value2 = value1;
            $("input#maxNomHead").val(value2);
        }
        $("#slider_nominal-head").slider("values",1,value2);
    });

    // Номинальный расход, м3/ч
    $('#slider_rated-flow').slider({
        min: 0,
        max: 10,
        values: [0,10],
        range: true,
        stop: function(event, ui) {
            $("input#minRatedFlow").val($("#slider_rated-flow").slider("values",0));
            $("input#maxRatedFlow").val($("#slider_rated-flow").slider("values",1));
        },
        slide: function(event, ui){
            $("input#minRatedFlow").val($("#slider_rated-flow").slider("values",0));
            $("input#maxRatedFlow").val($("#slider_rated-flow").slider("values",1));
        }
    });

    // чтобы ползунок переключался, когда вводят значение в инпут
    $("input#minRatedFlow").change(function(){ 
        var value1=$("input#minRatedFlow").val();
        var value2=$("input#maxRatedFlow").val();

        if(parseInt(value1) > parseInt(value2)){
            value1 = value2;
            $("input#minRatedFlow").val(value1);
        }
        $("#slider_rated-flow").slider("values",0,value1);	
    });

        
    $("input#maxRatedFlow").change(function(){
        var value1=$("input#minRatedFlow").val();
        var value2=$("input#maxRatedFlow").val();
        
        if (value2 > 10) { value2 = 10; $("input#maxRatedFlow").val(10)};

        if(parseInt(value1) > parseInt(value2)){
            value2 = value1;
            $("input#maxRatedFlow").val(value2);
        }
        $("#slider_rated-flow").slider("values",1,value2);
    });

    // Производительность
    $('#slider_performance').slider({
        min: 0,
        max: 566,
        values: [0,566],
        range: true,
        stop: function(event, ui) {
            $("input#minPerformance").val($("#slider_performance").slider("values",0));
            $("input#maxPerformance").val($("#slider_performance").slider("values",1));
        },
        slide: function(event, ui){
            $("input#minPerformance").val($("#slider_performance").slider("values",0));
            $("input#maxPerformance").val($("#slider_performance").slider("values",1));
        }
    });

    // чтобы ползунок переключался, когда вводят значение в инпут
    $("input#minPerformance").change(function(){ 
        var value1=$("input#minPerformance").val();
        var value2=$("input#maxPerformance").val();

        if(parseInt(value1) > parseInt(value2)){
            value1 = value2;
            $("input#minPerformance").val(value1);
        }
        $("#slider_performance").slider("values",0,value1);	
    });

        
    $("input#maxPerformance").change(function(){
        var value1=$("input#minPerformance").val();
        var value2=$("input#maxPerformance").val();
        
        if (value2 > 566) { value2 = 566; $("input#maxPerformance").val(566)};

        if(parseInt(value1) > parseInt(value2)){
            value2 = value1;
            $("input#maxPerformance").val(value2);
        }
        $("#slider_performance").slider("values",1,value2);
    });

    // Мощность, Вт
    $('#slider_power').slider({
        min: 0,
        max: 2200,
        values: [0,2200],
        range: true,
        stop: function(event, ui) {
            $("input#minPower").val($("#slider_power").slider("values",0));
            $("input#maxPower").val($("#slider_power").slider("values",1));
        },
        slide: function(event, ui){
            $("input#minPower").val($("#slider_power").slider("values",0));
            $("input#maxPower").val($("#slider_power").slider("values",1));
        }
    });

    // чтобы ползунок переключался, когда вводят значение в инпут
    $("input#minPower").change(function(){ 
        var value1=$("input#minPower").val();
        var value2=$("input#maxPower").val();

        if(parseInt(value1) > parseInt(value2)){
            value1 = value2;
            $("input#minPower").val(value1);
        }
        $("#slider_power").slider("values",0,value1);	
    });

        
    $("input#maxPower").change(function(){
        var value1=$("input#minPower").val();
        var value2=$("input#maxPower").val();
        
        if (value2 > 2200) { value2 = 2200; $("input#maxPower").val(2200)};

        if(parseInt(value1) > parseInt(value2)){
            value2 = value1;
            $("input#maxPower").val(value2);
        }
        $("#slider_power").slider("values",1,value2);
    });
});