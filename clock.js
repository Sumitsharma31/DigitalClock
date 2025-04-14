 
        function updateClock() {
            let now = new Date();
            let APmeridiem="";
            let hours = now.getHours();
            // let hours = 13;
            let minutes = now.getMinutes();
            let seconds = now.getSeconds();

            // Format the time to have 2 digits

            if (hours > 12) {
                hours = hours - 12;
                APmeridiem="PM";
            }
            else{
                APmeridiem="AM";
            }
          
            hours = hours < 10 ? '0' + hours : hours;
            if (minutes<10) {
                minutes='0'+minutes
            }
            
            // minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            // Set the time
            document.getElementById('hour').textContent = hours;
            document.getElementById('min').textContent = minutes;
            document.getElementById('sec').textContent = seconds;
            document.getElementById('Meridiem').textContent = APmeridiem;

            // Set the date
            let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            let day = days[now.getDay()];
            let date = now.getDate();
            let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            let month = months[now.getMonth()];

            document.getElementById('day').textContent = day;
            document.getElementById('date').textContent = date;
            document.getElementById('month').textContent = month;
        }

        // Update the clock every second
        setInterval(updateClock, 1000);

        // Call the function on initial load
        updateClock();