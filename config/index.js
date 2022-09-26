import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uokbwfwuzbjsqlsypydn.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVva2J3Znd1emJqc3Fsc3lweWRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQxODIwMTIsImV4cCI6MTk3OTc1ODAxMn0.mp5QGroH8jYBzqBWVvQJU8PQoCyMpChzGKL0XpT8c9c"
const supabase = createClient(supabaseUrl, supabaseKey)