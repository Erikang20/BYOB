// function db() {
//     $.ajax( {
//         type: "POST",
//         url: 'http://ec2-52-35-89-81.us-west-2.compute.amazonaws.com:9001/users',
//         data: '',
//         success: function () {
//             console.log( "hello Erika" );
//         }
//     } )
// };


$( document ).ready( function () {
    Materialize.updateTextFields();
    $( '.collapsible' ).collapsible( {
        accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    } );

    $( '#modal1' ).leanModal();

    console.log( "document is ready here" );
} );


$( function () {
    console.log( "here here" );

    $( ".input input" ).focus( function () {

        $( this ).parent( ".input" ).each( function () {
            $( "label", this ).css( {
                "line-height": "18px",
                "font-size": "18px",
                "font-weight": "100",
                "top": "0px"
            } )
            $( ".spin", this ).css( {
                "width": "100%"
            } )
        } );
    } ).blur( function () {
        $( ".spin" ).css( {
            "width": "0px"
        } )
        if ( $( this ).val() == "" ) {
            $( this ).parent( ".input" ).each( function () {
                console.log( "this thing" );
                $( "label", this ).css( {
                    "line-height": "60px",
                    "font-size": "24px",
                    "font-weight": "300",
                    "top": "10px"
                } )
            } );

        }
    } );

    $( ".button" ).click( function ( e ) {
        var pX = e.pageX,
            pY = e.pageY,
            oX = parseInt( $( this ).offset().left ),
            oY = parseInt( $( this ).offset().top );
        console.log( "button working here" );

        $( this ).append( '<span class="click-efect x-' + oX + ' y-' + oY + '" style="margin-left:' + ( pX - oX ) + 'px;margin-top:' + ( pY - oY ) + 'px;"></span>' )
        $( '.x-' + oX + '.y-' + oY + '' ).animate( {
            "width": "500px",
            "height": "500px",
            "top": "-250px",
            "left": "-250px",

        }, 600 );
        $( "button", this ).addClass( 'active' );
    } )

    $( ".alt-2" ).click( function () {
        if ( !$( this ).hasClass( 'material-button' ) ) {
            $( ".shape" ).css( {
                "width": "100%",
                "height": "100%",
                "transform": "rotate(0deg)"
            } )

            setTimeout( function () {
                $( ".overbox" ).css( {
                    "overflow": "initial"
                } )
            }, 600 )

            $( this ).animate( {
                "width": "140px",
                "height": "140px"
            }, 500, function () {
                $( ".box" ).removeClass( "back" );

                $( this ).removeClass( 'active' )
            } );

            $( ".overbox .title" ).fadeOut( 300 );
            $( ".overbox .input" ).fadeOut( 300 );
            $( ".overbox .button" ).fadeOut( 300 );

            $( ".alt-2" ).addClass( 'material-buton' );
        }

    } )

    $( ".material-button" ).click( function () {

        if ( $( this ).hasClass( 'material-button' ) ) {
            setTimeout( function () {
                $( ".overbox" ).css( {
                    "overflow": "hidden"
                } )
                $( ".box" ).addClass( "back" );
            }, 200 )
            $( this ).addClass( 'active' ).animate( {
                "width": "700px",
                "height": "700px"
            } );

            setTimeout( function () {
                $( ".shape" ).css( {
                    "width": "50%",
                    "height": "50%",
                    "transform": "rotate(45deg)"
                } )

                $( ".overbox .title" ).fadeIn( 300 );
                $( ".overbox .input" ).fadeIn( 300 );
                $( ".overbox .button" ).fadeIn( 300 );
            }, 700 )

            $( this ).removeClass( 'material-button' );

        }

        if ( $( ".alt-2" ).hasClass( 'material-buton' ) ) {
            $( ".alt-2" ).removeClass( 'material-buton' );
            $( ".alt-2" ).addClass( 'material-button' );
        }

    } );
} );
