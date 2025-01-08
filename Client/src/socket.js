

export function socketConnection(io){

    const socket = io.connect('localhost:3000');

    socket.on('connect', () => {
      console.log('Successfully connected!');
    });
    /*
    const input = document.getElementById('input');
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      socket.emit('message', input.value);
      if (input.value) {
        //console.log('sending', input.value);
        input.value = '';
      }
    });*/
}
