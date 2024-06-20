/**
 * LogScreen.js
 *
 * This screen component displays the exercise logs for the current user.
 * The logs are grouped by date, and users can expand each date to view the details of their workouts.
 * Data is fetched from the MongoDB database using Axios, and the user information is retrieved from the UserContext.
 *
 * Author: [Thomas Zoldowski]
 * Date: [6/9/2024]
 */

import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';
import { UserContext } from '../UserContext';

const LogScreen = () => {
  const { userInfo } = useContext(UserContext);
  const [logs, setLogs] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);

  // Fetch logs when the component mounts and whenever userInfo._id changes
  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const config = {
          method: 'post',
          url: 'https://us-east-1.aws.data.mongodb-api.com/app/data-ahccmtz/endpoint/data/v1/action/find',
          headers: {
            'Content-Type': 'application/json',
            'api-key': 'AVDiOuu2gQWJFXtVxQua89Sd9sw3U5BNsw5EWx98c1JXJzrqCElfzeo0bqaP1ZAL', // Your API key
          },
          data: JSON.stringify({
            collection: 'logs',
            database: 'FitMaster',
            dataSource: 'FitMaster0',
            filter: { userId: userInfo._id },
          }),
        };
        const response = await axios(config);
        const logs = response.data.documents;

        // Group logs by date
        const groupedLogs = logs.reduce((acc, log) => {
          const date = new Date(log.timestamp).toISOString().split('T')[0];
          if (!acc[date]) acc[date] = [];
          acc[date].push(log);
          return acc;
        }, {});

        setLogs(groupedLogs);
      } catch (error) {
        console.error('Error fetching logs:', error);
      }
    };

    fetchLogs();
  }, [userInfo._id]);

  // Handle date selection to expand/collapse logs for the selected date
  const handleDateSelect = (date) => {
    setSelectedDate(selectedDate === date ? null : date);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Exercise Logs</Text>
      {Object.keys(logs).map((date) => (
        <View key={date}>
          <TouchableOpacity style={styles.dateContainer} onPress={() => handleDateSelect(date)}>
            <Text style={styles.dateText}>{date}</Text>
          </TouchableOpacity>
          {selectedDate === date && logs[date].map((log) => (
            <View key={log._id} style={styles.logContainer}>
              <Text style={styles.logText}>Workout: {log.workout}</Text>
              <Text style={styles.logText}>Exercise: {log.exercise}</Text>
              <Text style={styles.logText}>Weight: {log.weight}</Text>
              <Text style={styles.logText}>Reps: {log.reps}</Text>
              <Text style={styles.logText}>Time: {new Date(log.timestamp).toLocaleTimeString()}</Text>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212020',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
  dateContainer: {
    backgroundColor: '#B3A0FF',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  dateText: {
    fontSize: 18,
    color: '#212020',
  },
  logContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  logText: {
    fontSize: 16,
    color: '#212020',
  },
});

export default LogScreen;
