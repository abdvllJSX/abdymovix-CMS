// ./config/plugins.js
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://lrntdduvmlxhsxqspivc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxybnRkZHV2bWx4aHN4cXNwaXZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0Njc3NzcsImV4cCI6MjA1MzA0Mzc3N30.OGYzYkPStjlbwnlRYLhjJ-UckWLEFvNyJ_zQ1i20lds';
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = {
    upload: async (file) => {
        const { data, error } = await supabase.storage.from('abdymovix').upload(file.name, file.buffer);

        if (error) {
            throw new Error(error.message);
        }

        return data.Key; // Return the key or URL of the uploaded file
    },
};