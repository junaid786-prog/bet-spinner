document.addEventListener('DOMContentLoaded', function (event) {
                //setup options for spinwheel
                var options = {
                    el: '#spinwheel',
                    canvas_size: 780,
                    fonts: ['Rubik'],
                    messageContainer: '#spinwheel-messages',
                    showMessages: true,
                    graphicPath: '../double-spin_files/',
                    graphics: {
                        bg: {file: 'ring-outer.png'},
                        segments: [
                            {file: 'ring-1.png'},
                            {file: 'ring-2.png'},
                                    // { file: 'ring-3.png' }
                        ],
                        arrow: {file: 'pointer.png'},
                        spinBtn: {file: 'cta-btn.png'},
                        lightOff: {file: 'pointer.png'},
                        lightOn: {file: 'cta-btn.png'},
                        preload: [

                        ]
                    },
                    components: {
                        bg: {
                            rotate: 0, //0 - 360
                            scale: 0.81, // 0 - 1
                            rotateBy: 0
                        },

                        spinBtn: {
                            rotate: 0, //0 - 360
                            scale: 0.3, // 0 - 1
                            clickableScale: 0.4, // 0 - 1
                            text: "CLICK TO SPIN",
                            font: 'Rubik',
                            fontSize: 25,
                            fontWeight: 800,
                            fontColor: '#fff',
                            fontShadowColor: 'black',
                            fontShadowBlur: 8,
                            fontStrokeColor: '#000',
                            fontStrokeWeight: 2,
                            fontOffsetX: 0,
                            fontOffsetY: -5,

                        },
                        arrow: {
                            rotate: 0, //0 - 360
                            scale: 0.096, //0 - 1
                            x: 0, //0 - 1
                            y: 0.63 //0 - 1
                        },
                        segments: [
                            {
                                rotate: -9 * 22.5, //start angle (0 - 360)
                                rotateBy: 10, //spin speed (>0)
                                scale: 0.77, //0 - 1
                                textRadius: 0.85, //0 - 1
                                font: 'Arial',
                                fontSize: 34,
                                fontWeight: 400,
                                fontColor: 'white',
                                fontShadowColor: '',
                                fontShadowBlur: 0,
                                fontStrokeColor: 'rgba(0,0,0,0.2)',
                                fontStrokeWeight: 6,
                                textPosition: 'short', // long | short
                                lineGap: 0
                            },
                            {
                                rotate: 2 * 22.5, //start angle (0 - 360)
                                rotateBy: 10, //spin speed (>0)
                                scale: 0.435, //0 - 1
                                textRadius: 0.80, //0 - 1
                                font: 'Arial',
                                fontSize: 30,
                                fontWeight: 400,
                                fontColor: 'white',
                                fontShadowColor: '',
                                fontShadowBlur: 0,
                                fontStrokeColor: 'rgba(0,0,0,0.2)',
                                fontStrokeWeight: 6,
                                textPosition: 'short', // long | short
                                lineGap: 0
                            },
                                    // {
                                    //     rotate: -8 * 22.5, //start angle (0 - 360)
                                    //     rotateBy: 10, //spin speed (>0)
                                    //     scale: 0.36, //0 - 1
                                    //     textRadius: 0.72, //0 - 1
                                    //     font: 'Arial',
                                    //     fontSize: 26,
                                    //     fontWeight: 400,
                                    //     fontColor: 'white',
                                    //     fontShadowColor: '',
                                    //     fontShadowBlur: 0,
                                    //     fontStrokeColor: 'rgba(0,0,0,0.2)',
                                    //     fontStrokeWeight: 6,
                                    //     textPosition: 'short', // long | short
                                    //     lineGap: 0
                                    // }
                        ],
                        light: {
                            count: 0
                        }
                    },
                    segmentLabels: [
                        [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
                        [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
                        [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
                    ],
                    spinTime: 3000,
                    stages: ["0,0", "1,0"],
                    winAngle: 0 * 45, //0 - 360
                    drawArrow: true,
                    shroudColour: 'rgba(0,0,0,0.25)',
                    rotateSegmentsOnIdle: true,
                    hideSpinTextOnSpin: false,
                    init: function () {
                        console.log(this)
                    },
                    onSpin: function (index) { },
                    messageShown: function(){}//document.getElementById("funfare").play();},

                };


                //create spinwheel
                var wheel = new Spinwheel(options);
                //hide message on click outside area
                var msgCont = document.getElementById('spinwheel-messages');
                msgCont.addEventListener('click', function (e) {
                    if (e.target == msgCont && wheel.o.state != "stopped") {
                        wheel.hideMessage();
                    }
                });

                //set correct screen height on mobile
                var appHeight = function appHeight() {
                    var doc = document.documentElement;
                    doc.style.setProperty('--app-height', "".concat(window.innerHeight, "px"));
                };
                window.addEventListener('resize', appHeight);
                appHeight();


            });
