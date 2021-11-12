import "./App.css";
import axios from "axios";

function App() {
  const uri = `https://system.onuma.com/26/api/items/workorder/1858?fields=*,files.*,files.directus_files.id,files.directus_files.filename_download,files.directus_files.title,files.directus_files.type,files.directus_files.uploaded_on,files.directus_files.width,files.directus_files.height,files.directus_files.data.*,files.directus_files.uploaded_by.first_name,files.directus_files.uploaded_by.last_name,building.id,building.name,building.number,building.site.id,building.site.name,floor.id,floor.name,floor.number,space.id,space.name,space.number,components.id,components.component.id,components.component.name,components.component.instance_name,tasks.*,tasks.assigned_technician.id,collaborators.id,collaborators.workorder.id,collaborators.collaborator.id`;
  const api = {
    Authorization: "Bearer aZ823Dv5KosP",
  };

  const test = async () => {
    console.log("test");
    const bodyComplete = {
      completed_confirmed_date: "2021-11-12 22:34:51",
      completed_date: "2021-11-12 22:34:52",
      id: 1858,
      status: "Completed",
    };
    const completeddResponse = await axios.patch(uri, bodyComplete, {
      headers: api,
    });
    console.log("completed response", completeddResponse);

    const bodyAssigned = {
      id: 1858,
      status: "Assigned",
      assigned_date: "2021-11-12 22:18:05",
    };
    const assignedResponse = await axios.patch(uri, bodyAssigned, {
      headers: api,
    });
    console.log("assigned response", assignedResponse);
  };
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={test}>Test</button>
      </header>
    </div>
  );
}

export default App;
