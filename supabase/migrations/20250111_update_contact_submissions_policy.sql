-- Drop the existing policy if it exists
DROP POLICY IF EXISTS "Enable insert for all users" ON public.contact_submissions;

-- Create a new, more permissive policy
CREATE POLICY "Allow inserts for all users"
ON public.contact_submissions
FOR INSERT
TO public
WITH CHECK (true);

-- Ensure RLS is enabled
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

