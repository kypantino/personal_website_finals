<script setup>
import { ref, onMounted } from 'vue'
import { createClient } from '@supabase/supabase-js'
import PersonalProfile from './components/PersonalProfile.vue'

const supabaseUrl = 'https://toiwwmhdgjvhmktbhbwq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvaXd3bWhkZ2p2aG1rdGJoYndxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwNzQ1NzgsImV4cCI6MjA1NjY1MDU3OH0.EonCrfOqdG18RrBOP3oNYKe9bqaoe7KUDW3_Mc7FZFA'
const supabase = createClient(supabaseUrl, supabaseKey)

const comments = ref([])
const name = ref('')
const comment = ref('')
const loading = ref(false)
const errorMessage = ref('')

// Fetch comments from Supabase
async function getComments() {
  loading.value = true
  errorMessage.value = ''
  try {
    const { data, error } = await supabase.from('comments').select()
    if (error) {
      throw error
    }
    comments.value = data
    console.log('Fetched comments:', data)
  } catch (error) {
    console.error('Error fetching comments:', error.message)
    errorMessage.value = 'Error fetching comments: ' + error.message
  } finally {
    loading.value = false
  }
}

// Add new comment to Supabase
async function addComment() {
  if (!name.value || !comment.value) {
    alert('Please enter your name and comment before submitting.')
    return
  }

  loading.value = true
  errorMessage.value = ''
  try {
    const { data, error } = await supabase.from('comments').insert([
      { name: name.value, comment: comment.value }
    ])
    if (error) {
      throw error
    }
    console.log('Inserted data:', data)

    // Refetch comments after insert
    await getComments()

    // Clear input fields
    name.value = ''
    comment.value = ''
  } catch (error) {
    console.error('Error inserting comment:', error.message)
    errorMessage.value = 'Error inserting comment: ' + error.message
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  getComments()
})
</script>

<template>
  <PersonalProfile/>
  <div class="comments-section">
    <h2>Comment Section</h2>
    <p class="short-message">Feel free to leave a comment about your thoughts or whatever you want below! :></p>
    <!-- Comment Form -->
    <div class="comment-form-container">
      <div class="comment-form">
        <input v-model="name" placeholder="Your name" />
        <textarea v-model="comment" placeholder="Your comment"></textarea>
        <button @click="addComment" :disabled="loading">Add Comment</button>
      </div>
    </div>
    <!-- Display Comments -->
    <div class="comments-box">
      <h3>Comments</h3>
      <div class="comments-list">
        <div v-for="comment in comments" :key="comment.id" class="comment-item">
          <div class="comment-content">
            <p class="comment-name">{{ comment.name }}</p>
            <p class="comment-text">{{ comment.comment }}</p>
          </div>
        </div>
      </div>
      <p v-if="loading">Loading comments...</p>
      <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<style scoped>
/* Comments Section */
.comments-section {
  padding: 20px 10px;
  background-color: #2C2C2C;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
  color: #EEDBBF;
  max-width: 100%; 
  margin: 0 auto;
}

.comments-section h2 {
  font-family: 'Playfair Display', serif;
  color: #EEDBBF;
  margin-bottom: 10px;
  text-align: center;
}

.short-message {
  text-align: center;
  margin-bottom: 20px;
  color: #EEDBBF;
  font-family: 'Poppins', sans-serif;
}

/* Comment Form Container */
.comment-form-container {
  background-color: #5E1D1D; 
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.6);
  margin-bottom: 20px; 
}

/* Comment Form */
.comment-form input,
.comment-form textarea {
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 5px;
  border: none;
  background-color: #1E1E1E;
  color: #EEDBBF;
}

.comment-form button {
  width: 100%;
  padding: 8px;
  background-color: #451616; 
  color: #EEDBBF;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.comment-form button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.comment-form button:hover:enabled {
  background-color: #7A2828; 
}

/* Comments Box */
.comments-box {
  background-color: #451616;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.6);
  max-height: 400px; 
  overflow-y: auto; 
}

.comments-box h3 {
  font-family: 'Playfair Display', serif;
  color: #EEDBBF;
  margin-bottom: 10px;
  text-align: center;
}

/* Comments List */
.comments-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px; 
  justify-content: center; 
}

.comment-item {
  flex: 1 1 calc(33.333% - 10px); 
  max-width: calc(33.333% - 10px); 
  box-sizing: border-box;
}

.comment-content {
  background-color: #5E1D1D;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
}

.comment-name {
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 5px;
  color: #EEDBBF;
}

.comment-text {
  font-family: 'Poppins', sans-serif;
  text-align: center;
  font-size: 0.7rem;
  color: #EEDBBF;
}

/* Responsive Design */
@media (max-width: 768px) {
  .comments-section {
    padding: 10px;
  }

  .comment-form-container,
  .comments-box {
    padding: 5px;
  }

  .comment-form input,
  .comment-form textarea,
  .comment-form button {
    padding: 6px;
  }

  .comment-content {
    padding: 8px;
  }

  .comment-item {
    flex: 1 1 100%; /* Stack comments vertically on smaller screens */
    max-width: 100%;
  }
}
</style>