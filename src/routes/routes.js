import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// screen
import SignUp from "../screens/SignUp";
import CreatAccount from "../screens/CreatAccount";
import AccountDetails from "../screens/AccountDetails";
import Yourname from "../screens/Yourname";
import CompanyDetails from "../screens/CompanyDetails";
import CompanySize from "../screens/CompanySize";
import YouCarbon from "../screens/YouCarbon";
import TakeTour from "../screens/TakeTour";
import SignIn from "../screens/SignIn";
import Home from "../screens/Home";
import BottomTab from "../services/navigation/BottomTab";
import ExtraMenu from "../screens/ExtraMenu";
import DecarbonizerMission from "../screens/DecarbonizerMission";
import ContactUs from "../screens/ContactUs";
import HowDecarbonizerWorks from "../screens/howDecarbonizerWorks";
import Faq from "../screens/Faq";
import FundingStage from "../screens/FundingStage";
import ProjectDetails from "../screens/ProjectDetails";
import YourDashBoard from "../screens/YourDashboard";
import ConfirmAmount from "../screens/ConfirmAmount";
import PaymentProcced from "../screens/PaymentProcced";
import PurchaseTokens from "../screens/PurchaseTokens";
import Wallet from "../screens/Wallet";
import PaymentMethod from "../screens/PaymentMethod";
import UserBottom from "../services/navigation/UserBottom";
import UserForm from "../screens/UserForm";
import TreesProject from "../screens/TreesProject";
import Exploreplans from "../screens/Exploreplans";
import { getAccessToken } from "../util/getAsyncStorage";
import Step2 from "../components/UserForm/Step2";
import Step3 from "../components/UserForm/Step3";
import Step4 from "../components/UserForm/Step4";
import OurPlan from "../screens/OurPlan";
import { NavigationContainer } from "@react-navigation/native";
import { setToken } from "../store";
import { useDispatch, useSelector } from "react-redux";
import ForgotPassword from "../screens/ForgotPassword";
import ResetPassword from "../screens/ResetPassword";

export const SetRoutes = () => {
  const dispatch = useDispatch();
  const [initialRoute, setInitialRoute] = React.useState(null);
  const [initialised, setInitialised] = React.useState(false);
  // const [token, setToken] = useState(null);

  const getInitialRoute = async () => {
    try {
      const token = await getAccessToken();
      console.log("token from stpraga", token);
      if (token) {
        setInitialRoute("BottomTab");
        // setToken(token);
        dispatch(setToken(token));
      } else {
        setInitialRoute("SignUp");
      }
    } catch (error) {
      console.log("error while get the token", error);
      setInitialRoute("SignUp");
    } finally {
      setInitialised(true);
    }
  };

  console.log("initialRoute", initialRoute);

  useEffect(() => {
    getInitialRoute();
  }, []);

  return initialised && <Routes initialRoute={initialRoute} />;
};

const Routes = ({ initialRoute }) => {
  const Stack = createNativeStackNavigator();
  const { token } = useSelector((state) => state.signInReducer);

  console.log("token from the routes state", token);

  return (
    // <Stack.Navigator
    // screenOptions={{
    //   headerShown: false,
    //   animationEnabled: false,
    //   BottomTabBar: {
    //     visible: true,
    //   },
    // }}
    //   initialRouteName={initialRoute}
    // >
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
        BottomTabBar: {
          visible: true,
        },
      }}
    >
      {!token ? (
        <>
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="CreatAccount" component={CreatAccount} />
          <Stack.Screen name="AccountDetails" component={AccountDetails} />
          <Stack.Screen name="Yourname" component={Yourname} />
          <Stack.Screen name="CompanyDetails" component={CompanyDetails} />
          <Stack.Screen name="CompanySize" component={CompanySize} />
          <Stack.Screen name="YouCarbon" component={YouCarbon} />
          <Stack.Screen name="TakeTour" component={TakeTour} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        </>
      ) : (
        <>
          {/* <Stack.Screen name="Home" component={Home} /> */}
          <Stack.Screen name="BottomTab" component={BottomTab} />
          <Stack.Screen name="ExtraMenu" component={ExtraMenu} />
          <Stack.Screen
            name="DecarbonizerMission"
            component={DecarbonizerMission}
          />
          <Stack.Screen name="ContactUs" component={ContactUs} />
          <Stack.Screen
            name="HowDecarbonizerWorks"
            component={HowDecarbonizerWorks}
          />

          <Stack.Screen name="Faq" component={Faq} />
          <Stack.Screen name="FundingStage" component={FundingStage} />
          <Stack.Screen name="ProjectDetails" component={ProjectDetails} />
          <Stack.Screen name="YourDashBoard" component={YourDashBoard} />
          <Stack.Screen name="ConfirmAmount" component={ConfirmAmount} />
          <Stack.Screen name="PaymentProcced" component={PaymentProcced} />
          <Stack.Screen name="PurchaseTokens" component={PurchaseTokens} />
          <Stack.Screen name="Wallet" component={Wallet} />
          <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
          <Stack.Screen name="UserBottom" component={UserBottom} />
          <Stack.Screen name="UserForm" component={UserForm} />
          <Stack.Screen name="OurPlan" component={OurPlan} />
          <Stack.Screen name="TreesProject" component={TreesProject} />
          <Stack.Screen name="Exploreplans" component={Exploreplans} />
          <Stack.Screen name="Step2" component={Step2} />
          <Stack.Screen name="Step3" component={Step3} />
          <Stack.Screen name="Step4" component={Step4} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
        </>
      )}
    </Stack.Navigator>

    // <Stack.Screen name="Home" component={Home} />
    // <Stack.Screen name="ExtraMenu" component={ExtraMenu} />
    // <Stack.Screen
    //   name="DecarbonizerMission"
    //   component={DecarbonizerMission}
    // />
    // <Stack.Screen name="ContactUs" component={ContactUs} />
    // <Stack.Screen
    //   name="HowDecarbonizerWorks"
    //   component={HowDecarbonizerWorks}
    // />
    // <Stack.Screen name="BottomTab" component={BottomTab} />
    // <Stack.Screen name="Faq" component={Faq} />
    // <Stack.Screen name="FundingStage" component={FundingStage} />
    // <Stack.Screen name="ProjectDetails" component={ProjectDetails} />
    // <Stack.Screen name="YourDashBoard" component={YourDashBoard} />
    // <Stack.Screen name="ConfirmAmount" component={ConfirmAmount} />
    // <Stack.Screen name="PaymentProcced" component={PaymentProcced} />
    // <Stack.Screen name="PurchaseTokens" component={PurchaseTokens} />
    // <Stack.Screen name="Wallet" component={Wallet} />
    // <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
    // <Stack.Screen name="UserBottom" component={UserBottom} />
    // <Stack.Screen name="UserForm" component={UserForm} />
    // <Stack.Screen name="OurPlan" component={OurPlan} />
    // <Stack.Screen name="TreesProject" component={TreesProject} />
    // <Stack.Screen name="Exploreplans" component={Exploreplans} />
    // <Stack.Screen name="Step2" component={Step2} />
    // <Stack.Screen name="Step3" component={Step3} />
    // <Stack.Screen name="Step4" component={Step4} />
    //{" "}
    // </Stack.Navigator>
  );
};

export default Routes;
