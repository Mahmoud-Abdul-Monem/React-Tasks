import { useRef, useState } from "react";
import bin from "./assets/trash-svgrepo-com.svg";

const defaultTasks = [
	{ name: "Gym", desc: "Play cardio" },
	{ name: "Cinema", desc: "Watch movie" },
	{ name: "Home", desc: "Take a shower" },
];

let savedTasks = localStorage.getItem("tasks");

if (savedTasks) {
	savedTasks = JSON.parse(savedTasks);
} else {
	savedTasks = defaultTasks;
}

export default function App() {
	const [tasks, setTasks] = useState(savedTasks);

	const nameRef = useRef();
	const descRef = useRef();

	const addTask = (e) => {
		e.preventDefault();

		const name = nameRef.current.value;
		const desc = descRef.current.value;

		if (!name.trim()) return;

		const updatedTasks = [...tasks, { name, desc }];

		setTasks(updatedTasks);
		localStorage.setItem("tasks", JSON.stringify(updatedTasks));

		nameRef.current.value = "";
		descRef.current.value = "";
	};

	const deleteTask = (indexToDelete) => {
		const updatedTasks = [...tasks];
		updatedTasks.splice(indexToDelete, 1);

		setTasks(updatedTasks);
		localStorage.setItem("tasks", JSON.stringify(updatedTasks));
	};

	return (
		<div className="min-h-dvh w-full p-8 flex flex-col items-center gap-8">
			<form className="w-full max-w-sm" onSubmit={addTask}>
				<fieldset className="fieldset w-full bg-base-100 border border-base-300 p-5 rounded-box shadow-lg">
					<legend className="fieldset-legend text-lg font-bold px-2">
						Add Task
					</legend>

					<label className="fieldset-label font-semibold">Task Name</label>
					<input
						ref={nameRef}
						type="text"
						placeholder="Enter task name"
						className="input input-bordered w-full mb-3"
					/>

					<label className="fieldset-label font-semibold">Task Desc</label>
					<input
						ref={descRef}
						type="text"
						placeholder="Enter task description"
						className="input input-bordered w-full mb-4"
					/>

					<button type="submit" className="btn btn-neutral w-full">
						Add Task
					</button>
				</fieldset>
			</form>

			<div className="overflow-x-auto w-full">
				<table className="table w-full">
					<thead>
						<tr>
							<th>#</th>
							<th>Task Name</th>
							<th>Task Desc</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{tasks.map((task, index) => (
							<tr key={index}>
								<th>{index + 1}</th>
								<td className="font-semibold">{task.name}</td>
								<td>{task.desc}</td>
								<td>
									<button
										type="button"
										className="btn btn-ghost btn-xs"
										onClick={() => deleteTask(index)}
									>
										<img src={bin} className="w-5" alt="delete" />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}