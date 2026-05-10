import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import CreateTrip from "./pages/CreateTrip";
import Itinerary from "./pages/Itinerary";
import Budget from "./pages/Budget";
import AIPlanner from "./pages/AIPlanner";
import ItineraryPlanner from "./pages/ItineraryPlanner";
import BudgetAnalytics from "./pages/BudgetAnalytics";
import ItineraryBuilder from "./pages/ItineraryBuilder";
import SharedItinerary from "./pages/SharedItinerary";
import ActivitySearch from "./pages/ActivitySearch";
import TripNotes from "./pages/TripNotes";
import UserProfile from "./pages/UserProfile";
import PackingChecklist from "./pages/PackingChecklist";

function App() {

  return (

    <BrowserRouter>

      <Routes>


        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/create-trip"
          element={<CreateTrip />}
        />

        <Route
          path="/itinerary"
          element={<Itinerary />}
        />

        <Route
          path="/budget"
          element={<Budget />}
        />

        <Route
    path="/ai-planner"
    element={<AIPlanner />}
/>

<Route
    path="/itinerary-planner"
    element={<ItineraryPlanner />}
/>

<Route
    path="/budget-analytics"
    element={<BudgetAnalytics />}
/>

<Route
    path="/itinerary-builder"
    element={<ItineraryBuilder />}
/>
<Route
    path="/shared-itinerary"
    element={<SharedItinerary />}
/>

<Route
    path="/activity-search"
    element={<ActivitySearch />}
/>

<Route
    path="/trip-notes"
    element={<TripNotes />}
/>

<Route
    path="/user-profile"
    element={<UserProfile />}
/>

<Route
    path="/packing-checklist"
    element={<PackingChecklist />}
/>
      </Routes>

    </BrowserRouter>

  );
}

export default App;