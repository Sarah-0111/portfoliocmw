# portfoliocmw

Portfolio personnel bilingue FR / EN.  
Conçu et intégré — HTML, CSS, JavaScript vanilla.

---

## Fichiers

- `index.html` — structure du site
- `style.css` — tous les styles
- `langue.js` — switch FR/EN + données des projets
- `scroll.js` — animations, navigation, détail projet
- `image/` — visuels des projets

---

## Modifier un projet

Tout est dans `langue.js`, dans l'objet `projetsData`.  
Chaque projet a une version `fr` et une version `en`.

Pour changer les images, remplacer les chemins dans le tableau `images` :

```js
images: ["image/monimage_1.png", "image/monimage_2.png", "image/monimage_3.png"]
```

Si une image est manquante, mettre `""` — une couleur s'affiche à la place.

---

## Ajouter une traduction

Toutes les chaînes de texte sont dans l'objet `traductions` de `langue.js`.  
Chaque clé correspond à un `id` dans le HTML.

---

## Lancer le projet

Ouvrir `index.html` dans un navigateur.  
Aucune installation, aucune dépendance (juste Google Fonts en ligne).
