<template>
    <div class="container-list">
        <ul class="name-list">
            <div class="list-l">
                <span>Name</span>
                <li class="list-item">{{ name }}</li>
            </div>
            <div>
                <span>Email</span>
                <li class="list-item">{{ email }}</li>
            </div>
            <div>
                <span>Phone</span>
                <li class="list-item">{{ phone }}</li>
            </div>
        </ul>
    </div>
</template>

<script src="./index.ts" lang="ts" />

<style scoped>
.container-list {
    margin: 50px 0;
    padding: 20px;
    width: 100%;
}
.name-list {
    display: flex;
    justify-content: space-between;
}
.list-item {
    width: 33.3%;
    text-decoration: none!important;
}
.list-l {
    display: flex;
    flex-direction: column;
}
li {
    text-decoration: none!important;
}
</style>