// Simulasi pesan kopi
function testASyncrhonus() {
    return new Promise((resolve) => {
      console.log("Pesan Kopi");
      setTimeout(() => {
        console.log("Pesanan sedang dibuat...");
        resolve("Kopi siap disajikan");
      }, 2000);
    });
  }
  
  const prosesPesanan = async () => {
    const response = await testASyncrhonus();
    console.log(response);
    console.log("Customer menghabiskan kopi");
  };
  
  // Fungsi untuk mengambil user berdasarkan ID
  async function ambilUserById(id) {
    try {
      console.log(`Mengambil user dengan ID: ${id}`);
      
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      console.log("Data User berhasil diambil:");
      console.log("ID:", data.id);
      console.log("Nama:", data.name);
      console.log("Email:", data.email);
      console.log("Phone:", data.phone);
      console.log("Website:", data.website);
      console.log("Company:", data.company.name);
      console.log("Address:", data.address.street + ", " + data.address.city);
      
      return data;
    } catch (error) {
      console.error("Terjadi kesalahan:", error.message);
      return null;
    }
  }
  
  // Fungsi untuk mengambil comment berdasarkan ID
  async function ambilCommentById(id) {
    try {
      console.log(`Mengambil comment dengan ID: ${id}`);
      
      const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      console.log("Data Comment berhasil diambil:");
      console.log("ID:", data.id);
      console.log("Nama:", data.name);
      console.log("Email:", data.email);
      console.log("Isi Komentar:", data.body);
      console.log("Post ID:", data.postId);
      
      return data;
    } catch (error) {
      console.error("Terjadi kesalahan:", error.message);
      return null;
    }
  }
  
  // Fungsi untuk mengambil semua users
  async function ambilSemuaUsers() {
    try {
      console.log("Mengambil semua users...");
      
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const users = await response.json();
      
      console.log("Data semua users berhasil diambil:");
      console.log("Total users:", users.length);
      
      users.forEach((user) => {
        console.log("ID:", user.id, "| Nama:", user.name, "| Email:", user.email);
      });
      
      return users;
    } catch (error) {
      console.error("Terjadi kesalahan:", error.message);
      return [];
    }
  }
  
  // Versi Promise
  function ambilUserDenganPromise(id) {
    console.log(`Mengambil user ID ${id} dengan Promise...`);
    
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(user => {
        console.log("Data User (Promise) berhasil diambil:");
        console.log("Nama:", user.name);
        console.log("Email:", user.email);
        console.log("Company:", user.company.name);
        return user;
      })
      .catch(error => {
        console.error("Error (Promise):", error.message);
        return null;
      });
  }
  
  // Menjalankan contoh
  prosesPesanan();
  
  setTimeout(async () => {
    console.log("Menjalankan contoh pengambilan data dengan parameter ID:");
    
    await ambilUserById(1);
    await ambilUserById(5);
    await ambilCommentById(5);
    await ambilUserDenganPromise(2);
    await ambilSemuaUsers();
    
  }, 3000);