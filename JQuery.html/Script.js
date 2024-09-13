$(document).ready(function(){
        // $("button").click(function(){
        //         $("p").hide()
        // })

        // $("button").dblclick(function(){
        //     $("#test").hide()
        // })

        $("button").click(function(){
            $("p.new").hide()
        })
        $("#test").click(function(){
            $(this).hide()
        })
        // $("#mypara").mouseenter(function(){
        //     alert("mouse leave")
        // })

        // $("#mypara").mouseleave(function(){
        //     alert("mouse leave")
        // })

        // $("#mypara").hover(
        //     function(){
        //         alert('Hover on')
        //     },
        //     function() {
        //         alert('Hover out')
        //     })

        //focus or blur
        $("input").focus(function(){
            $(this).css("background-color","yellow")
        })

        $("input").blur(function(){
            $(this).css("background-color","green")
        })
        })
