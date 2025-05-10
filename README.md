# DevTinder

Episode 15 : 

- Created a Vite + ReactApp
- Design Library : tailwindcss and daisyUI
- Add Navbar
- Study About React Router DOM
- Component Design
- Create Child Routes and Outlet
- Create Login Page 
- Install axios for making post request
- CORS -> install cors in backend => add middleware with configuration for whitelisting domain 
- Also add withCredentials true in frontend and backend
- Install redux toolkit + react-redux
- Create/Configure Store => Provide it through Provider => createSlice => addReducer to store
- Add redux devtools and see data getting reflected there
- Navbar should update as soon as user logs in 
- Add constants file for base url
- you should not be able to access other routes untill user is authenticated
- if token not present -> redirect to login
- Logout  Feature
- Profile Feature
- Edit Profile Feature
- See All Connections
- See All Requests
- Accept/Reject Requests
- Interested/Ignore Feed
- Signup
- E2E Testing
- =========================
- Deploying on AWS
    1. Sign up on AWS
    2. Launch EC2 Instance
    3. chmod 400 <secret>.pem
    4. ssh -i "dev-tinder-secrets.pem" ubuntu@ec2-13-53-186-14.eu-north-1.compute.amazonaws.com
    5. Install node
    6. Git Clone dev tinder projects
        - Deploying Frontend
            1. npm install
            2. npm build
            3. sudo apt update
            4. sudo apt install nginx
            5. sudo systemctl start nginx
            6. sudo systemctl enable nginx
            7. Copy code fro dist to /var/www/html/
            8. sudo scp -r dist/* /var/www/html
            9. Enable Port :80 of your Instance
            10. Modify the BASE_URL in frontend to point to /api 
