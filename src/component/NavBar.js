import React, {useState} from "react";
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";


export default function NavBar(){
    const [open, setOpen] = useState(false);
    const [Home, setHome] = useState("");
    const [NewProperties, setNewProperties] = useState("");
    const [AboutUs, setAboutUs] = useState("");
    const [ContactUs, setContactUs] = useState("");
    const [submittedEntries, setSubmittedEntries] = useState([]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = () => {
        setSubmittedEntries([...submittedEntries, { Home, NewProperties,AboutUs,ContactUs }]);
        setHome("");
        setNewProperties("");
        setAboutUs("");
        setContactUs("");
        setOpen(false);
    };
    return(
        <div>
            <TextField label="Home" margin="normal" variant="outlined" color="secondary"/>
  
            <TextField label="New Properties" margin="normal" variant="outlined" color="secondary"/>

            <TextField label="About Us" margin="normal" variant="outlined" color="secondary"/>

            <TextField label="Contact Us" margin="normal" variant="outlined" color="secondary"/>

            <Button variant="outlined" onClick={handleClickOpen} color="primary">
                Add
            </Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Enter Details</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Home"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={Home}
                        onChange={(e) => setHome(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="New Properties"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={NewProperties}
                        onChange={(e) => setNewProperties(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="About Us"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={AboutUs}
                        onChange={(e) => setAboutUs(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        label="Contact Us"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={ContactUs}
                        onChange={(e) => setContactUs(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Displaying Submitted Entries */}
            <div>
                <h3>Submitted Entries:</h3>
                <ul>
                    {submittedEntries.map((entry, index) => (
                        <li key={index}>
                            <strong>Home:</strong> {entry.Home} <br />
                            <strong>NewProperties:</strong> {entry.NewProperties}<br />
                            <strong>AboutUs:</strong> {entry.AboutUs}<br />
                            <strong>ContactUs:</strong> {entry.ContactUs}<br />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}