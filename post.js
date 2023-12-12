let row = document.querySelector(".row");

async function userPrompt(){
  let userInput = prompt('Lütfen 1 ile 10 arasında bir sayı yazınız');
  try {
    let userId = parseInt(userInput);
    if (userId <= 0 || userId > 10 || isNaN(userId) ) {
      throw new Error('Geçersiz userId. Lütfen 1 ile 10 arasında bir sayı girin.');

  }
  
  const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('userId', userId);
    window.history.replaceState(null, null, `?${urlParams.toString()}`);

    await getUsers(userId);
  
  } catch (error) {
    alert(error)
  }
}

async function getUsers(userId) {
  try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const data = await response.json();
    data.forEach(post => {
      createCard(post);
  })}
  catch(error){
    console.error(error);
  }
  }

function createCard(post) {
  row.innerHTML += `<div class="col-lg-6"><div class="card border-warning mb-3">
  <div class="card-header bg-transparent border-primary">${post.id}</div>
  <div class="card-body text-secondary">
    <h5 class="card-title">${post.userId}</h5>
    <p class="card-text"> ${post.title} 
  </div>
  <div class="card-footer bg-transparent border-success">${post.body}</div>
</div></div>`;
}



userPrompt()


