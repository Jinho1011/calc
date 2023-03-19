import React from "react";
import { useForm } from "react-hook-form";
import "./Input.css";

const data = [
  {
    category: "",
    rows: [{ label: "mission_profile", data: ["ram_mission_nominal"] }],
  },
  {
    category: "CONFIGURATION",
    rows: [
      { label: "aspect_ratio_wing", data: [9.7] },
      { label: "taper_ratio_wing", data: [0.586] },
      { label: "sweep_wing_leading_edge", data: [0] },
      { label: "num_of_propellers_ctol", data: [2] },
      { label: "num_of_propeller_blades", data: [6] },
    ],
  },
  {
    category: "AERODYNAMICS",
    rows: [
      { label: "oswald_effy", data: [0.7] },
      { label: "CD_0", data: [0.0288] },
      { label: "CL_max", data: [2.2] },
      { label: "CL_takeoff", data: [0.7] },
      { label: "CD_takeoff", data: [0.05] },
      { label: "CD_landing", data: [0.05] },
      { label: "CL_landing", data: [0.7] },
    ],
  },
  {
    category: "PROPULSION",
    rows: [
      { label: "effy_motor", data: [0.95] },
      { label: "effy_propeller", data: [0.8] },
      { label: "effy_controller", data: [0.7] },
      { label: "effy_propeller_cruise", data: [0.8] },
      { label: "effy_propeller_climb", data: [0.7] },
      { label: "effy_propeller_descent", data: [0.8] },
      { label: "effy_propeller_takeoff", data: [0.5] },
      { label: "effy_propeller_landing", data: [0.45] },
    ],
  },
  {
    category: "ENERGY-SYSTEM",
    rows: [
      { label: "coef_batt_usable_energy", data: [0.85] },
      { label: "spec_energy_batt_wh_per_kg", data: [800] },
      { label: "effy_batt", data: [0.8] },
      { label: "coef_propulsion_install", data: [1.3] },
    ],
  },
  {
    category: "MASS",
    rows: [
      { label: "mass_frac_subsys", data: [0.05] },
      { label: "mass_frac_avionics", data: [0.02] },
      { label: "mass_frac_struct", data: [0.2] },
      { label: "mass_payload", data: [954] },
      { label: "passenger_number", data: [9] },
      { label: "coef_ground_friction", data: [0.04] },
      { label: "height_obstacle", data: [10.7] },
    ],
  },
  {
    category: "DESIGN VARIABLE",
    rows: [
      { label: "mass_total_inp", data: [8618, 3000, 12000] },
      { label: "wing_loading", data: [1600, 100, 2000] },
      { label: "power_loading", data: [16, 7, 50] },
    ],
  },
  {
    category: "OBJECTIVE",
    rows: [
      { label: "calc_total_mass", data: [0] },
      { label: "mass_total_out", data: [0] },
    ],
  },
  {
    category: "CONSTRAINT",
    rows: [
      { label: "calc_stall_speed", data: [0] },
      { label: "speed_stall", data: [36] },
    ],
  },
  {
    category: "CONSTRAINT",
    rows: [
      { label: "calc_maximum_speed", data: [0] },
      { label: "speed_max", data: [120] },
      { label: "altitude1", data: [0] },
    ],
  },
  {
    category: "CONSTRAINT",
    rows: [
      { label: "calc_takeoff_dist", data: [0] },
      { label: "distance_takeoff", data: [800] },
      { label: "altitude2", data: [0] },
    ],
  },
  {
    category: "CONSTRAINT",
    rows: [
      { label: "calc_rate_of_climb", data: [0] },
      { label: "rate_of_climb", data: [6.25] },
      { label: "altitude3", data: [0] },
    ],
  },
];

const Input = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {data.map((v, index) => {
        return (
          <div key={v.category + index}>
            <h1>{v.category}</h1>
            <div className="rows-container">
              {v.rows.map((row, index) => {
                return (
                  <div className="row" key={row.label + index}>
                    <label>{row.label}</label>
                    {row.data.map((value, index) => (
                      <input
                        defaultValue={value}
                        {...register(
                          row.data.length > 1
                            ? row.label + (index + 1)
                            : row.label
                        )}
                        key={value + index}
                      />
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
      <input className="submit" type="submit" />
    </form>
  );
};

export default Input;
