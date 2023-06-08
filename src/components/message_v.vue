<template>
    




<!-- Conteneur pour la liste de conversations -->
<div class="conversations">
    <!-- Conversation 1 -->
    <div class="conversation" onclick="window.location.href='conversation1.html';">
        <img src="image1.jpg" alt="Image conversation">
        <div class="info">
            <h2>Titre de la conversation 1</h2>
            <p>Dernier message de la conversation 1</p>
        </div>
    </div>
    <!-- Conversation 2 -->
    <div class="conversation" onclick="window.location.href='conversation2.html';">
        <img src="image2.jpg" alt="Image conversation">
        <div class="info">
            <h2>Titre de la conversation 2</h2>
            <p>Dernier message de la conversation 2</p>
        </div>
    </div>
    <!-- Ajouter d'autres conversations ici -->
</div>
</template>
<style>
/* Style pour la liste de conversations */
.conversations {
	display: flex;
	flex-direction: column;
    position: relative;
    top:50px;
}

/* Style pour chaque conversation */
.conversation {
	display: flex;
	align-items: center;
	padding: 20px;
	border-bottom: 1px solid #ccc;
	cursor: pointer;
}

/* Style pour l'image de chaque conversation */
.conversation img {
	width: 50px;
	height: 50px;
	object-fit: cover;
	border-radius: 50%;
	margin-right: 20px;
}

/* Style pour les informations de chaque conversation */
.conversation .info {
	flex: 1;
}

/* Style pour le titre de chaque conversation */
.conversation h2 {
	margin: 0;
	font-size: 18px;
	font-weight: normal;
}

/* Style pour le dernier message de chaque conversation */
.conversation p {
	margin: 0;
	color: #999;
	font-size: 14px;
}

</style>