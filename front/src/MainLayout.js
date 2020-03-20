import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, ActivityIndicator, StyleSheet } from "react-native";

import { AuthNavigation } from "./navigation/Auth/AuthNavigation";
import { AppNavigation } from "./navigation/App/AppNavigation";
import { autoSignin } from "./store/actions/auth";
import { THEME } from "./theme";

export const MainLayout = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const loading = useSelector(state => state.auth.loading);

  useEffect(() => {
    dispatch(autoSignin());
  }, [dispatch]);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator color={THEME.TURQUOISE_COLOR} size={30} />
      </View>
    );
  }

  if (isLoggedIn) {
    return <AppNavigation />;
  }

  return <AuthNavigation />;
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.MAIN_COLOR
  }
});
