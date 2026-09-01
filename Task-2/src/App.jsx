import { useRef, useState } from "react";
import bin from "./assets/trash-svgrepo-com.svg";


export default function App() {

	const defaultTasks = [
		{ name: "Gym", desc: "Play cardio" },
		{ name: "Cinema", desc: "Watch movie" },
		{ name: "Home", desc: "Take a shower" },
	];

	let savedTasks = localStorage.getItem("tasks");
	savedTasks = savedTasks ? JSON.parse(savedTasks) : defaultTasks;

	const [tasks, setTasks] = useState(savedTasks);
	const [editingIndex, setEditingIndex] = useState(null);

	const nameRef = useRef();
	const descRef = useRef();
	const editNameRef = useRef();
	const editDescRef = useRef();

	const updateLocalStorage = (newTasks) => {
		setTasks(newTasks);
		localStorage.setItem("tasks", JSON.stringify(newTasks));
	};

	const addTask = (e) => {
		e.preventDefault();
		const name = nameRef.current.value;
		const desc = descRef.current.value;

		if (!name.trim()) return;

		const updatedTasks = [...tasks, { name, desc }];
		updateLocalStorage(updatedTasks);

		nameRef.current.value = "";
		descRef.current.value = "";
	};

	const deleteTask = (indexToDelete) => {
		const updatedTasks = [...tasks];
		updatedTasks.splice(indexToDelete, 1);
		updateLocalStorage(updatedTasks);
	};
	const openEditModal = (index) => {
		setEditingIndex(index);
		document.getElementById("edit_modal").showModal();

		setTimeout(() => {
			if (editNameRef.current && editDescRef.current) {
				editNameRef.current.value = tasks[index].name;
				editDescRef.current.value = tasks[index].desc;
			}
		}, 0);
	};

	const handleSaveEdit = (e) => {
		e.preventDefault();
		if (editingIndex === null) return;

		const updatedTasks = [...tasks];
		updatedTasks[editingIndex] = {
			name: editNameRef.current.value,
			desc: editDescRef.current.value,
		};

		updateLocalStorage(updatedTasks);
		document.getElementById("edit_modal").close();
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
							<th>Edit</th>
							<th>Delete</th>
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
										className="btn bg-yellow-400 btn-xs"
										onClick={() => openEditModal(index)}
									>
										Edit
									</button>
								</td>
								<td>
									<button
										type="button"
										className="btn bg-red-400 btn-xs"
										onClick={() => deleteTask(index)}
									>
										<img src={bin} className="w-4" alt="delete" />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<dialog id="edit_modal" className="modal">
				<div className="modal-box max-w-md">
					<h3 className="font-bold text-lg mb-4">Edit Task</h3>

					<form onSubmit={handleSaveEdit}>
						<div className="flex flex-col gap-3">
							<div>
								<label className="label text-sm font-semibold">
									Task Name
								</label>
								<input
									ref={editNameRef}
									type="text"
									placeholder="Enter task name"
									className="input input-bordered w-full"
								/>
							</div>

							<div>
								<label className="label text-sm font-semibold">
									Task Desc
								</label>
								<input
									ref={editDescRef}
									type="text"
									placeholder="Enter task description"
									className="input input-bordered w-full"
								/>
							</div>
						</div>

						<div className="modal-action mt-6">
							<button type="submit" className="btn btn-neutral">
								Save Changes
							</button>
							<button
								type="button"
								className="btn"
								onClick={() => document.getElementById("edit_modal").close()}
							>
								Cancel
							</button>
						</div>
					</form>
				</div>

				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>
		</div>
	);
}