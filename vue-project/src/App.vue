<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

const comments = ref([])

async function getcomments() {
  const { data } = await supabase.from('comments').select()
  comments.value = data
}

onMounted(() => {
  getcomments()
})
</script>

<template>
  <Personal-Profile/>
  <div class="comments-section">
    <h2>Comments</h2>
    <ul class="comments-list">
      <li v-for="comment in comments" :key="comment.id" class="comment-item">
        <p class="comment-name">{{ comment.name }}</p>
        <p class="comment-text">{{ comment.text }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* Comments Section */
.comments-section {
  padding: 20px 10px;
  background-color: #2C2C2C;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
  color: #EEDBBF;
}

.comments-section h2 {
  font-family: 'Playfair Display', serif;
  color: #EEDBBF;
  margin-bottom: 10px;
  text-align: center;
}

.comments-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: nowrap;
  gap: 20px; /* Add space between items */
}


.comment-item {
  background-color: #451616;
  border-radius: 10px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.6);
  padding: 20px; /* Adjust padding here */
  flex: 1 1 calc(33% - 40px); /* Adjust width to fit three items per row */
  text-align: left;
  transition: transform 0.3s, box-shadow 0.3s;
}

.comment-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.comment-name {
  font-family: 'Playfair Display', serif;
  font-size: 0.9em;
  text-align: center;
  margin-bottom: 5px;
  color: #EEDBBF;
}

.comment-text {
  font-family: 'Poppins', sans-serif;
  font-size: 0.9em;
  color: #EEDBBF;
}
</style>