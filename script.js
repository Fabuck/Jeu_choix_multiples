const  prompt = require('prompt-sync')();


let finished = false;
let shield = false;
let startChoice;
let courChoice;
let towerChoice;

console.log(`Après un long et dangereux périple la tour de Zoltan le Terrible se dresse enfin devant vous.
    Tout le village compte sur vous pour mettre un terme à son règne de terreur`);
startChoice =
  prompt(`Sur votre gauche se trouve la cour du domaine et sur votre droite la tour sombre semble déchirer le ciel
    Souhaitez vous aller à (g) gauche ou (d) droite ?`);

while (finished === false) {
  while (startChoice != "g" && startChoice != "d") {
    startChoice =
      prompt(`Sur votre gauche se trouve la cour du domaine et sur votre droite la tour sombre semble déchirer le ciel
                Souhaitez vous aller à (g) gauche ou (d) droite ?`);
  }
  if (startChoice == "g") {
    console.log(
      "Le chemin débouche sur une grande cour dans laquelle se trouve une grange dont émane un grognement sourd et un batiment en ruine qui semble être une armurerie"
    );
    courChoice = prompt(
      "Souhaitez vous entrer dans la  (g) grange ou (a) l'armurerie ?"
    );

    while (courChoice != "g" && courChoice != "a") {
      courChoice = prompt(
        "Souhaitez vous entrer dans la  (g) grange ou (a) l'armurerie ?"
      );
    }
    if (courChoice == "g") {
      console.log(`La grange est sombre, vous n'y voyez rien , vous vous approchez lentement du bruit sourd.
            Vos yeux s'habituent à l'obscurité ,devant vous UN OGRE
             Vous ne faites pas le poids , il se jette sur vous et vous devore...Vous êtes MORT`);
      finished = true;
    } else if (courChoice == "a") {
      console.log(`L'armurie est délabré et semble vide, du coin de l'oeil un éclat lumineux attire votre attention...
            Un bouclier ! Vous le prenez avec vous et rebroussez chemin`);
      shield = true;
      startChoice =
        prompt(`Sur votre gauche se trouve la cour du domaine et sur votre droite la tour sombre semble déchirer le ciel
                Souhaitez vous aller à (g) gauche ou (d) droite ?`);
    }
  } else if (startChoice == "d") {
    console.log(
      `La tour se dresse devant vous ! Le puissant Zoltan vous attend surement ,soyez prudent...`
    );
    towerChoice = prompt(
      `Souhaitez vous utiliser (a) l'échelle ou (b) l'escalier ? `
    );

    while (towerChoice != "a" && towerChoice != "b") {
      towerChoice = prompt(
        `Souhaitez vous utiliser (a) l'échelle ou (b) l'escalier ? `
      );
    }
    if (towerChoice == "a") {
      console.log(`Vous montez lentement à l'échelle pour vous introduire dans la tour , le puissant Zoltan est penché sur l'escalier et ne vous voit pas !
            Vous profitez de sa confusion pour le pousser en bas de la tour , le puissant Zoltan est mort , vous êtes VICTORIEUX`);
      finished = true;
    } else if (towerChoice == "b" && shield == false) {
      console.log(`Zoltan vous attendez en haut de l'escalier ! Il a le high ground ! Zoltan vous réduit en cendres...
            Le village n'entend plus jamais parlé de vous , vous êtes MORT !`);
      finished = true;
    } else if (towerChoice == "b" && shield == true) {
      console.log(`Zoltan vous attendez en haut de l'escalier ! Il vous lance de puissant sort mais heureusement le bouclier que vous avez récupéré précedement vous protège !
            Vous renvoyez ses sorts et le puissant Zoltan se désintegre sous vous yeux !
            Vous êtes VICTORIEUX`);
      finished = true;
    }
  }
}