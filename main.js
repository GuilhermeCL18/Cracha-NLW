const LinksSocialMedia = {
  //nomes alternativos:links_social_media
  github: 'GuilhermeCL18',
  youtube: 'GuilhermeCL',
  facebook: 'GuilhermeCL',
  instagram: 'GuilhermeCL',
  twitter: 'GuilhermeCL'
}

function changeSocialMediaLinks() {
  for (let li of SocialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url2 = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url2)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      BIO.textContent = data.bio
      nomedogitescritospan.textContent = data.login
      imagemdoperfil.src = data.avatar_url
      nomedogitescrito.href = data.html_url
    })
}

getGitHubProfileInfos()
