fetch('/api/volunteers', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  }).then(response => {
    if (response.ok) {
      alert("Inscrição enviada com sucesso!");
    } else {
      alert("Erro ao enviar inscrição.");
    }
  });