let bg;
            let x = 0, y = 0;
            let mx = 0, my = 0;
            const speed = 0.03;

            const loop = () =>{
                mx += (x - mx) * speed;
                my += (y - my) * speed;
                window.requestAnimationFrame(loop);
            }

            const mouseFunc = (e) =>{
                x = (e.clientX-window.innerWidth/2), y = (e.clientY-window.innerHeight/1);
                bg.style.transform = `translate(${-(mx/40)}px, ${-(my/40)}px)`;
            }

            window.onload = () =>{
                bg = document.getElementById("bg");
                bgb = document.getElementById("bgb");
                loop();
                window.addEventListener("mousemove", mouseFunc);
            }